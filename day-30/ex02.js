// let ulElement = document.getElementsByTagName("ul")[0];
// console.log(ulElement.className = "list");

// let anchorElement = document.getElementsByTagName("a")[0];

// anchorElement.href ="https://google.com";
// anchorElement.innerText = "Trang chu google";

const dataMenu = [
	{ id: 1, name: "Trang chủ", slug: "/" },
	{ id: 2, name: "Sản phẩm", slug: "/san-pham" },
	{ id: 3, name: "Về chúng tôi", slug: "/ve-chung-toi" },
	{ id: 4, name: "Phụ kiện", slug: "/phu-kien", parentId: 2 },
];

const buildMenu = (data) => {
    dataMenu.forEach((item) => {
        if (!item.parentId) {
            item.parentId = 0;
        }
    })
    const map = data.reduce((acc,cur) => {
        const temp = cur.parentId;
        if(!acc[temp]) {
            acc[temp]  = [];
        } 
        acc[temp].push(cur)
        return acc;

    },{})

    const createMenu = (parentID) => {
        let items = map[parentID] || [];
        if(items.length === 0) return '';

        let html = '<ul style = "list-style:none;">';

        items.forEach(item => { 
            html += `<li> <a href=".${item.slug}" >${item.name}</a>`;
            console.log(html);
            html += createMenu(item.id);
            html +=`</li>`
        });

        html +="</ul>";

        return html;
    }

    return createMenu(0);
}
const content = buildMenu(dataMenu);
document.body.innerHTML = `<header>
    <nav>
        ${content}
    </nav>
</header>`