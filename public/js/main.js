const loginBtn = document.getElementById('loginBtn')
const login = document.getElementById('loginOptions')
const globalSitesBtn = document.getElementById('sitesBtn')
const globalSites = document.getElementById('sitesDropdown')

 loginBtn.addEventListener('click', () => {
     if (login.classList.contains('hidden')){
         login.classList.remove('hidden')
     } else{
         login.classList.add('hidden')
     }
 })

 globalSitesBtn.addEventListener('click', () => {
    if (globalSites.classList.contains('hidden')){
        globalSites.classList.remove('hidden')
    } else{
        globalSites.classList.add('hidden')
    }
})
