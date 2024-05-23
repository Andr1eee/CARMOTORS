// Запрос к серверу для получения списка байков
fetch('http://localhost:8081/cars', {
    method: 'GET',
    headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
    })
}).then(response => response.json())
    .then(cars => {
        let containerCars = document.querySelector('.text-container.cars');
        cars.forEach(car => {
            let carDiv = document.createElement('div');
            carDiv.classList.add('car');

            carDiv.innerHTML = `
             <div>
                <input type="hidden" value="${car.id}">
                <h2>${car.name}</h2>
                <p><strong>Рік випуску:</strong>${car.year}</p>
                <p><strong>Ціна:</strong>${car.price} $</p>
                <p><strong>Об'єм двигуна:</strong> ${car.engineCapacity} літра</p>
                <p><strong>Потужність:</strong> ${car.horsepower} к.с.</p>
            </div>
            <div>
                <img src="${car.imageURL}" style="max-height: 200px" alt="Name">
            </div>`;

            carDiv.addEventListener('click', () => {
                let url = `car.html?id=${car.id}`;
                /*if (boughtBikes[car.id]) {
                    url += '&isBought=true';
                }*/
                window.location.href = url;
            });

            containerCars.appendChild(carDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching bikes:', error);
    });