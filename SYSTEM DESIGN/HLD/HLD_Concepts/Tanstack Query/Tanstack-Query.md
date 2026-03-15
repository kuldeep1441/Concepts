# What is TanStack Query
# TanStack Query is a JavaScript library used for data-fetching, caching, and synchronization.
It Manages API data lifecycle in the browser.


# How it works :
UI requests data using a query
TanStack Query checks its cache
If data is fresh → returns cached data
If data is stale/missing → calls your API
Cache updates → UI re-renders everywhere
On updates, mutations sync DB and refresh cache


# Why to use it
Eliminates manual useEffect data fetching
Reduces duplicate API calls
Automatically manages loading & error states
Keeps data consistent across components
Scales well for large and serverless applications


# Core concepts
Query → read data
Mutation → update data
Query Key → unique cache identifier

useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
})


# Pesimistic Approach
useMutation({
  mutationFn: createUser,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['users'] })
  },
})


# Optimistic Approach
useMutation({
  mutationFn: toggleUser,
  onMutate: async (data) => {
    await queryClient.cancelQueries(['users'])
    const prev = queryClient.getQueryData(['users'])
    queryClient.setQueryData(['users'], optimisticUpdate)
    return { prev }
  },
  onError: (_, __, ctx) => {
    queryClient.setQueryData(['users'], ctx.prev)
  },
  onSettled: () => {
    queryClient.invalidateQueries(['users'])
  },
})

User clicks
↓
Optimistic UI update (cache only)
↓
Mutation HTTP call (toggleUser)
↓
Invalidate users
↓
GET /users (refetch)
↓
Cache updated with DB truth


Invalidate-only  → "Update after server confirms"
Optimistic       → "Assume success, rollback if wrong"

# When SHOULD you use optimistic updates?
✔ Toggle (like, follow, enable/disable)
✔ Counters (likes, votes)
✔ Status changes
✔ Booking confirmations
These actions are predictable.


# When NOT to use optimistic updates?
❌ Complex forms
❌ Multi-step transactions
❌ Payments
❌ Critical financial operations
Use simple invalidation there.


Optimistic mutations are faster and provide better UX, but require careful rollback logic.
Invalidate-on-success is simpler and safer for complex updates.



# EXAMPLES

# For User
useMutation({
  mutationFn: toggleRoomAvailability,

  onMutate: async (roomId) => {
    await queryClient.cancelQueries(['rooms'])
    const prevRooms = queryClient.getQueryData(['rooms'])
    queryClient.setQueryData(['rooms'], (old: any[]) =>
      old.map(room =>
        room.id === roomId
          ? { ...room, available: !room.available }
          : room
      )
    )
    return { prevRooms }
  },

  onError: (_, __, ctx) => {
    queryClient.setQueryData(['rooms'], ctx.prevRooms)
  },

  onSettled: () => {
    queryClient.invalidateQueries(['rooms'])
  },
})

# For Admin 
useMutation({
  mutationFn: updateBookingStatus,

  onMutate: async ({ bookingId, status }) => {
    await queryClient.cancelQueries(['bookings'])
    const prev = queryClient.getQueryData(['bookings'])
    queryClient.setQueryData(['bookings'], (old: any[]) =>
      old.map(b =>
        b.id === bookingId ? { ...b, status } : b
      )
    )
    return { prev }
  },

  onError: (_, __, ctx) => {
    queryClient.setQueryData(['bookings'], ctx.prev)
  },

  onSettled: () => {
    queryClient.invalidateQueries(['bookings'])
  },
})
