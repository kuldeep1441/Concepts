# Current State
Branch	Points to	Role
revamp	ad9cbf5	Current GitHub default
revamp-main-v3	ca96059	Latest code (your source of truth)
main	a15e377	Behind revamp-main-v3
develop	30257bc	Different history
uat	d7fa3c0	Very old/different code
Target State
Branch	Should point to	Role
develop	same as revamp-main-v3	Default branch (devs branch off this)
uat	same as revamp-main-v3	Testing branch (PRs from develop)
main	same as revamp-main-v3	Production/parent (PRs from uat)

# Step-by-Step Plan
1. Create backups (safety net)
You already have backup/main and backup/revamp-main-v3. We should also back up develop and uat:

git push origin origin/develop:refs/heads/backup/develop
git push origin origin/uat:refs/heads/backup/uat

2. Reset all three branches locally to revamp-main-v3
git fetch origin
git checkout -B main origin/revamp-main-v3
git checkout -B develop origin/revamp-main-v3
git checkout -B uat origin/revamp-main-v3

3. Force push all three to remote
git push origin main --force-with-lease
git push origin develop --force-with-lease
git push origin uat --force-with-lease
(--force-with-lease is safer than --force — it will refuse if someone pushed new commits you haven't fetched)

4. Change default branch on GitHub from revamp to develop
This must be done before you can add branch protection to main, and it's required so that develop is what people clone/see by default. Either:

Via GitHub UI: Settings > General > Default Branch > change to develop
Via CLI:
gh repo edit Digiaccel/digicampus-web --default-branch develop

5. Update branch protection rules
On GitHub (Settings > Branches > Branch protection rules):

main: Require PR reviews, no direct push, require status checks
uat: Require PRs (from develop), require status checks
develop: Optionally protect (require PRs from feature branches)

6. Clean up old branches (optional, after verifying everything works)
Once you confirm the new workflow is stable, you can archive/delete revamp and revamp-main-v3.

Flow going forward
feature-branch → develop (default) → uat (testing) → main (production)
Important warnings:

If there are any CI/CD pipelines referencing revamp or revamp-main-v3 as triggers, update them to use develop/uat/main
Notify your team — their local branches will need git fetch --prune && git checkout develop && git pull
If any branch protection rules exist on main/develop/uat, temporarily disable them before the force push
Want me to execute these steps? I can run them one by one so you can verify at each stage.
