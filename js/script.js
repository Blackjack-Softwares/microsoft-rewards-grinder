const _bingURL = "https://www.bing.com/search?q=", _searchTerms = ["Brown eggs", "Sweet fresh stawberry", "Asparagus", "Green smoothie", "Raw legums", "Baking cake", "Pesto with basil", "Hazelnut in black ceramic bowl", "Fresh stawberry", "Lemon and salt", "Homemade bread", "Legums", "Fresh tomato", "Healthy breakfast", "Green beans", "Baked stuffed portabello mushrooms", "Strawberry jelly", "Pears juice", "Fresh pears", "Caprese salad", "Oranges", "Vegan food", "Breakfast with muesli", "Honey", "Breakfast with cottage", "Strawberry smoothie", "Strawberry and mint", "Ricotta", "Cuban sandwiche", "Granola", "Smoothie with chia seeds", "Yogurt", "Sandwich with salad", "Cherry", "Raw asparagus", "Corn", "Vegan", "Fresh blueberries", "Smashed avocado", "Italian ciabatta", "Rustic breakfast", "Sliced lemons", "Plums", "French fries", "Strawberries", "Ground beef meat burger", "Tomatoes", "Basil", "Fruits bouquet", "Peaches on branch"], b_searchbox = document.getElementById("b_searchbox"), b_searchbutton = document.getElementById("b_searchbutton"), b_searchlabel = document.getElementById("b_searchlabel"), b_searchlinks = document.getElementById("b_searchlinks"), b_searchmessage = document.getElementById("b_searchmessage"), search = () => { let a = parseInt(b_searchbox.value.match(/\d+/g)); if (a > 0) { a > 50 && (b_searchbox.value = a = 50), b_searchbutton.disabled = b_searchbox.disabled = !0, b_searchlabel.style.display = "inline-block"; for (let b = 1; b <= a; b++) { let c = `${_searchTerms[Math.floor(Math.random() * _searchTerms.length)].toLowerCase()} (${b})`, d = "https://www.bing.com/search?q=" + encodeURI(c); setTimeout(() => { b_searchlabel.innerText = `Search "${c}" in progress, please wait...`; let e = window.open(d); setTimeout(() => { e.close() }, 5e3), b_searchlinks.innerHTML += `<li><a href='${d}' target='_blank'>${d}</a></li>`, "" !== b_searchlinks.innerHTML && (b_searchmessage.innerText = ""), b == a && (b_searchbutton.disabled = b_searchbox.disabled = !1, b_searchlabel.innerText = "", b_searchbox.value = "") }, (b - 1) * 3e3) } } else b_searchlabel.innerText = "Please enter a valid number of searches." }; function gtag() { dataLayer.push(arguments) } window.onload = () => { b_searchbutton.addEventListener("click", () => { search() }), b_searchbox.addEventListener("keyup", a => { ("Enter" === a.key || 13 === a.keyCode) && search() }) }, window.dataLayer = window.dataLayer || [], gtag("js", new Date), gtag("config", "G-YXNCPPFVCW")