const api_messages = 'https://inlupp-fa.azurewebsites.net/api/messages';
async function messages() {
    const response = await fetch(api_messages);
    const data = await response.json();
    const from1 = await(data[0].from);
    const david_message = await(data[0].title);
    const from2 = await(data[1].from);
    const tim_message = await(data[1].title);
    const from3 = await(data[2].from);
    const stella_message = await(data[2].title);
    const from4 = await(data[3].from);
    const hans_message = await(data[3].title);
    
    document.getElementById('from1').textContent = from1;
    document.getElementById('davidMessage').textContent = david_message;
    document.getElementById('from2').textContent = from2;
    document.getElementById('timMessage').textContent = tim_message;
    document.getElementById('from3').textContent = from3;
    document.getElementById('stellaMessage').textContent = stella_message;
    document.getElementById('from4').textContent = from4;
    document.getElementById('hansMessage').textContent = hans_message;
}

messages();

const api_notifications = 'https://inlupp-fa.azurewebsites.net/api/notifications';
async function notifications() {
    const response = await fetch(api_notifications);
    const data = await response.json();
    const notification1 = await(data[0].title);
    const subtitle1 = await(data[0].subtitle);
    const notification2 = await(data[1].title);
    const subtitle2 = await(data[1].subtitle);
    const notification3 = await(data[2].title);
    const subtitle3 = await(data[2].subtitle);
    
    document.getElementById('notification1').textContent = notification1;
    document.getElementById('subtitle1').textContent = subtitle1;
    document.getElementById('notification2').textContent = notification2;
    document.getElementById('subtitle2').textContent = subtitle2;
    document.getElementById('notification3').textContent = notification3;
    document.getElementById('subtitle3').textContent = subtitle3;
}

notifications();

greetUser('Adrian', 'Vilches')
.then(user => {
    document.getElementById('greetUser').innerText = user;
    document.getElementById('myName').innerText = user;
});

async function greetUser(firstName, lastName) {
    const response = await fetch(`https://inlupp-fa.azurewebsites.net/api/users?firstname=${firstName}&lastname=${lastName}`);
    return await response.text();
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

async function allUsers() {
    const response = await fetch(api_users);
    const data = await response.json();
    const users = await (data.users);

    document.getElementById('totalUsers').textContent = numberWithCommas(users);
}

allUsers();

async function allProjects() {
    const response = await fetch(api_projects);
    const data = await response.json();
    const projects = await (data.projects);
    
    document.getElementById('totalProjects').textContent = projects;
}

allProjects();

async function usersGrowth() {
    const response = await fetch(api_users);
    const data = await response.json();
    const {growth} = data;
    
    document.getElementById('usersGrowth').textContent = `+${growth}`;
}

usersGrowth();

async function projectsGrowth() {
    const response = await fetch(api_projects);
    const data = await response.json();
    const {growth} = data;
    
    document.getElementById('projectsGrowth').textContent = `+${growth}`;
}

projectsGrowth();

async function amount() {
    const response = await fetch(api_downloads);
    const data = await response.json();
    const [{offlineAmount}, {onlineAmount}] = data;

    document.getElementById('offlineAmount').textContent = numberWithCommas(offlineAmount);
    document.getElementById('onlineAmount').textContent = numberWithCommas(onlineAmount);
}

amount();

const api_totalSalesChart = 'https://inlupp-fa.azurewebsites.net/api/total-sales-chart';
async function totalSalesChart() {
    const response = await fetch(api_totalSalesChart);
    const data = await response.json();
    const {revenue, returns, queries, invoices} = data;

    document.getElementById('revenue').textContent = numberWithCommas(revenue);
    document.getElementById('returns').textContent = numberWithCommas(returns);
    document.getElementById('queries').textContent = numberWithCommas(queries);
    document.getElementById('invoices').textContent = numberWithCommas(invoices);
}

totalSalesChart();

const api_totalSales = 'https://inlupp-fa.azurewebsites.net/api/total-sales';
async function totalSales() {
    const response = await fetch(api_totalSales);
    const data = await response.json();
    const {currency, amount} = data;

    document.getElementById('totalSales').innerText = `${currency}${amount}`;
}

totalSales();

const api_totalPurchases = 'https://inlupp-fa.azurewebsites.net/api/total-purchases';
async function totalPurchases() {
     const response = await fetch(api_totalPurchases);
     const data = await response.json();
     const {currency, amount} = data;

     document.getElementById('totalPurchases').innerText = `${currency}${amount}`;
}

totalPurchases();

const api_totalOrders = 'https://inlupp-fa.azurewebsites.net/api/total-orders';
async function totalOrders() {
     const response = await fetch(api_totalOrders);
     const data = await response.json();
     const {currency, amount} = data;

     document.getElementById('totalOrders').innerText = `${currency}${amount}`;
}

totalOrders();

const api_totalGrowth = 'https://inlupp-fa.azurewebsites.net/api/total-growth';
async function totalGrowth() {
     const response = await fetch(api_totalGrowth);
     const data = await response.json();
     const {currency, amount} = data;

     document.getElementById('totalGrowth').innerText = `${currency}${amount}`;
}

totalGrowth();

const api_tickets = 'https://inlupp-fa.azurewebsites.net/api/tickets';
let select = document.getElementById('selectYear');
let result = document.getElementById('result');
let index = 0;

function allYears() {
    fetch(api_tickets)
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i < data.length; i++) {
            let element = document.createElement('option');
            element.textContent = data[i].year;
            element.value = i;
            select.appendChild(element);
        }
    })
}

allYears();

function getTickets(cat){
    
    result.innerHTML = '';
    
    fetch(api_tickets)
    .then(res => res.json())
    .then(data => {
        for(cat of data[cat].tickets) {

            let fullName = cat.name.split(' ');
            let initials = fullName[0].charAt(0) + fullName[1].charAt(0);

            result.innerHTML += 
            `
            <tr>
                <td class="pl-0">
                    <div class="icon-rounded-primary icon-rounded-md">
                        <h4 class="font-weight-medium">${initials}</h4>
                    </div>
                </td>
                <td>
                    <p class="mb-0">${cat.name}</p>
                    <p class="text-muted mb-0">${cat.city}</p>
                </td>
                <td>
                    <p class="mb-0">${cat.date.split(',', 1)}</p>
                    <p class="text-muted mb-0">${cat.date.slice(12, 24)}</p>
                </td>
                <td>
                    <p class="mb-0">${cat.project}</p>
                    <p class="text-muted mb-0">${cat.other}</p>
                </td>
                <td class="pr-0">
                    <i class="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                </td>
            </tr>
                `
        }
    })
}

getTickets(index);

selectYear.addEventListener('change', function(){
    index = select.value;
    getTickets(index);
});

const api_user_confirmation = 'https://inlupp-fa.azurewebsites.net/api/updates';
async function userConf() {
    const response = await fetch(api_user_confirmation);
    const data = await response.json();
    const title1 = await (data[0].title);
    const message1 = await (data[0].message);
    const time1 = await (data[0].time);
    const title2 = await (data[1].title);
    const message2 = await (data[1].message);
    const time2 = await (data[1].time);
    const title3 = await (data[2].title);
    const message3 = await (data[2].message);
    const time3 = await (data[2].time);
    
    document.getElementById('boldTitle1').innerText = title1;
    document.getElementById('message1').innerText = message1;
    document.getElementById('time1').innerText = time1;
    document.getElementById('boldTitle2').innerText = title2;
    document.getElementById('message2').innerText = message2;
    document.getElementById('time2').innerText = time2;
    document.getElementById('boldTitle3').innerText = title3;
    document.getElementById('message3').innerText = message3;
    document.getElementById('time3').innerText = time3;
}

userConf();

async function sales() {
    const response = await fetch (api_sales_report);
    const data = await response.json();
    const {downloads, purchases, users, growth} = data;
    
    document.getElementById('downloads').innerText = numberWithCommas(downloads);
    document.getElementById('purchases').innerText = numberWithCommas(purchases);
    document.getElementById('users').innerText = numberWithCommas(users);
    document.getElementById('growth').innerText = growth;
}

sales();

const api_invoices = 'https://inlupp-fa.azurewebsites.net/api/open-invoices';
let resultOfInvoices = document.getElementById('resultOfInvoices');

function getInvoices() {

    fetch(api_invoices)
    .then(res => res.json())
    .then(data => {
        for(i = 0; i < data.length; i++) {
            
            switch(data[i].status) {
                case 'Progress':
                classes = 'class="badge badge-success badge-fw"';
                break;
                case 'Open':
                classes = 'class="badge badge-warning badge-fw"';
                break;
                case 'On hold':
                classes = 'class="badge badge-danger badge-fw"';
                break;
                case 'Closed':
                classes = 'class="badge badge-secondary badge-fw"';
                break;
            }
            
            resultOfInvoices.innerHTML += 
            `                        
            <tr>
            <td>${data[i].invoice}</td>
            <td>${data[i].customer}</td>
            <td>${data[i].shipping}</td>
            <td class="font-weight-bold">${data[i].currency}${data[i].bestPrice}</td>
            <td>${data[i].purchasedPrice}</td>
            <td><div ${classes}>${data[i].status}</div></td>
            </tr>
            `
        }      
    })    
}

getInvoices();