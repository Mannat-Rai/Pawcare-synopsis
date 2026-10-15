# GitHub workflow
1. One person creates the repository and pushes this starter to `main`.
2. Add four teammates in GitHub Settings → Collaborators.
3. Everyone clones the same repo, then uses their assigned branch:
   - Priya: `feature/home-frontend`
   - Prakhar: `feature/auth-backend`
   - Prince: `feature/pet-management`
   - Om: `feature/pet-services-booking`
   - Mannat: `feature/adoption-requests`
4. Each member edits assigned files, commits, pushes their own branch and opens a Pull Request into `main`.
```bash
git checkout main
git pull origin main
git checkout -b YOUR_BRANCH
git add YOUR_ASSIGNED_PATH
git commit -m "Implement assigned module"
git push -u origin YOUR_BRANCH
```
Never commit `.env` or share credentials. Coordinate before editing shared app/package files. Review PRs before merging.
