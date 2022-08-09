const saveButton = document.querySelector('#saveButton')
const deleteButton = document.querySelector('#deleteButton')
const carMakeModelInput = document.querySelector('#Car_Make_Model')
const carAmount = document.querySelector('#Amount_Of_Vehicles')
const carFeatures = document.querySelector('#carFeatures')

const Stock_List_Container = document.querySelector('#Stock_List_Container')


function clearPage(){
    carMakeModelInput.value = ''
    carAmount.value = ''
    carFeatures.value = ''
    deleteButton.classList.add('hidden');
}

function displayStockInForm(stock){
    carMakeModelInput.value = stock.carMakeModel;
    carAmount.value = stock.carAmount;
    carFeatures.value =stock.carFeatures;
    saveButton.setAttribute('data-id', stock.id);
    deleteButton.classList.remove('hidden');
    deleteButton.setAttribute('data-id', stock.id);
}

function getStockById(id){  
    fetch(`https://localhost:7086/api/Stock/${id}`)
    .then(data => data.json())
    .then(response => displayStockInForm(response));
}

function populateForm(id){
    getStockById(id)
}


//The function below adds stock elements to the database
function addStock(carMakeModel, carAmount, carFeatures){

    const body = {
        carMakeModel: carMakeModel,
        carAmount: carAmount,
        carFeatures: carFeatures,
        isVisible: true,
    };

    fetch('https://localhost:7086/api/Stock', {
    method: 'POST', 
    body: JSON.stringify(body),
    headers: {
        "content-type": "application/json"
    }
    })
    .then(data => data.json())
    .then(response => {
        clearPage();
        getAllStock();
    });
}

//The two functions below get all of the elements in the database and display them.
function displayStock(stock){
    
    let allStock = ''

    stock.forEach(_stock => {
        const stockElement = `
                            <div class="accordion">
                                <div class="contentBox">
                                    <div class="label" data-id="${_stock.id}">
                                    <h3>${_stock.carMakeModel}</h3>
                                    </div>
                                    <div class="content">
                                        <div class="featuresHeading">
                                            <p1><b>Features:</b></p>
                                        </div> 
                                        <div class="features">
                                            <p2>${_stock.carFeatures}</p>
                                        </div> 
                                        <div class="amountHeading">
                                            <p3><b>Amount In Stock:</b></p>
                                        </div>                                                                            
                                        <div class="amount">
                                            <p4>${_stock.carAmount}</p>
                                        </div>                                        
                                    </div>      
                                </div>
                            </div>
                            `;

    allStock += stockElement });//This will ensure all elements are appended to the list
    Stock_List_Container.innerHTML = allStock

    //Event listeners for stock elements
    
    document.querySelectorAll('.contentBox').forEach(Stock => {
        Stock.addEventListener('click', function() {         
            this.classList.toggle('active');
        });
    });

    document.querySelectorAll('.label').forEach(Stock => {
        Stock.addEventListener('click', function() {                   
            populateForm(Stock.dataset.id);
        });
    });
   
}

function getAllStock(){
    fetch('https://localhost:7086/api/Stock')
    .then(data => data.json())
    .then(response => displayStock(response));
}

getAllStock();

function updateStock(id, carMakeModel, carAmount, carFeatures){

    const body = {
        carMakeModel: carMakeModel,
        carAmount: carAmount,
        carFeatures: carFeatures,
        isVisible: true,
    };

    fetch(`https://localhost:7086/api/Stock/${id}`, {
    method: 'PUT', 
    body: JSON.stringify(body),
    headers: {
        "content-type": "application/json"
    }
    })
    .then(data => data.json())
    .then(response => {
        clearPage();
        getAllStock();
    });
}


//Event listener for save button
saveButton.addEventListener('click', function(){
    const id = saveButton.dataset.id;
    if (id) {
        updateStock(id, carMakeModelInput.value, carAmount.value, carFeatures.value)       
    }
    else {
        addStock(carMakeModelInput.value, carAmount.value, carFeatures.value);
    }
});

//Delete function
function deleteStock(id){
    fetch(`https://localhost:7086/api/Stock/${id}`, {
    method: 'DELETE', 
    headers: {
        "content-type": "application/json"
    }
    })
    .then(response => {
        clearPage();
        getAllStock();
    });
}

//Event listener for delete button
deleteButton.addEventListener('click', function(){
    const id = deleteButton.dataset.id;
    deleteStock(id)
});