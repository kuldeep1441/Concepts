// Computer networks are systems that connect computers and other devices to share resources and communicate. Here are some key concepts:


// Types of Networks:

// LAN (Local Area Network): Covers a small geographic area, like a home or office.
// WAN (Wide Area Network): Spans large distances, connecting multiple LANs, like the internet.
// MAN (Metropolitan Area Network): Covers a city or a large campus.


// Network Topologies:

// Star: All devices connect to a central hub.
// Bus: All devices share a single communication line.
// Ring: Each device connects to two others, forming a ring.


// Protocols: Rules governing data transmission, such as:

// TCP/IP: Foundation of the internet; handles data packet transmission.
// HTTP/HTTPS: Protocols for web communication.


// Networking Devices:

// Router: Connects different networks and directs data.
// Switch: Connects devices within a single network.
// Modem: Connects a network to the internet.


// IP Addressing: Unique identifiers for devices on a network, crucial for data routing.


// Network Security: Measures to protect data and resources, including firewalls, encryption, and VPNs.

// Understanding these fundamentals is essential for mastery in computer networks.




// data ->> digital data (binary data)

// types of signal
// 1. Analog   2. Digital




// keywords
// 1. Network
// 2. Port


// bridge contains details of mac address of device with port number filled manually and when signal came it check the mac address and port address of src and destination
// comes in physical and data link layer
// follow store and forward strategy so there are no collisions
// used to connect 2 different LAN 

// Router are used to connect 2 different Network so it comes in Network layer.



// Mac address is used in local network , within college , within organizarion


// circuit sweetching was designed for telephone layer

// personal chat ->unicast,         news channel -> broadcast          whatsApp group -> multicast


// DATA LINK LAYER

// data link layer work within a network (used to make proper communication within network and use MAC address or physical address)

// network1 se -> node1 -> node2 -> node3 -> network2          // hop to hop or node to node delivery

// MAC address is physical address 
// while IP address is Logical address

// Frame boundaries are typically marked using special bit patterns that do not occur in normal data. These patterns serve as flags to signal the start or end of a frame.

// In HDLC (High-Level Data Link Control), a commonly used protocol, the frame boundary flag is represented by the bit sequence 01111110

// Let’s say a frame consists of data 11001100. It would be transmitted like this
// 01111110 11001100 01111110
