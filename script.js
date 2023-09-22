
            const ctx = document.getElementById('myChart');
            const ctx2 = document.getElementById('myChart2');
            const ctx3 = document.getElementById('myChart3');
            const ctx4 = document.getElementById('myChart4');
            const ctx5 = document.getElementById('myChart5');
            const ctx6 = document.getElementById('myChart6');
            const ctx7 = document.getElementById('myChart7');
            const ctx8 = document.getElementById('myChart8');

            const doughnutLabel = {
                id: 'doughnutLabel',
                beforeDatasetsDraw(chart, args, pluginOptions) {
                    const {ctx, data} = chart;
                    ctx.save();
                    const xCoor = chart.getDatasetMeta(0).data[0].x;
                    const yCoor = chart.getDatasetMeta(0).data[0].y;
                    ctx.font = 'bold 30px sans-serif';
                    ctx.fillStyle = 'rgb(99,169,31)';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(`test`, xCoor, yCoor);
                }
            }

            const doughnutLabel2 = {
                id: 'doughnutLabel2',
                beforeDatasetsDraw(chart, args, pluginOptions) {
                    const {ctx, data} = chart;
                    ctx.save();
                    const xCoor = chart.getDatasetMeta(0).data[0].x;
                    const yCoor = chart.getDatasetMeta(0).data[0].y;
                    ctx.font = 'bold 30px sans-serif';
                    ctx.fillStyle = 'rgb(255,127,17)';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(`time`, xCoor, yCoor);
                }
            }

            new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [300, 50],
                    backgroundColor: [
                        'rgb(99,169,31)',
                        'rgb(40,54,26)',
                    ],
                }]
            },
            plugins: [doughnutLabel],
            options: {
                maintainAspectRatio:false,
                responsive: true
            },
            });

            new Chart(ctx2, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [300, 50],
                    backgroundColor: [
                        'rgb(255,127,17)',
                        'rgb(243,223,194)',
                    ],
                }]
            },
            plugins: [doughnutLabel2],
            options: {
                maintainAspectRatio: false,
                responsive: true,
            },
            });

            new Chart(ctx5, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [300, 50],
                    backgroundColor: [
                        'rgb(255,127,17)',
                        'rgb(243,223,194)',
                    ],
                }]
            },
            plugins: [doughnutLabel2],
            options: {
                maintainAspectRatio: false,
                responsive: true,
            },
            });

            new Chart(ctx6, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [300, 50],
                    backgroundColor: [
                        'rgb(255,127,17)',
                        'rgb(243,223,194)',
                    ],
                }]
            },
            plugins: [doughnutLabel2],
            options: {
                maintainAspectRatio: false,
                responsive: true,
            },
            });

            new Chart(ctx7, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [300, 50],
                    backgroundColor: [
                        'rgb(255,127,17)',
                        'rgb(243,223,194)',
                    ],
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
            },
            plugins: [doughnutLabel2],
            });

            new Chart(ctx8, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [300, 50],
                    backgroundColor: [
                        'rgb(255,127,17)',
                        'rgb(243,223,194)',
                    ],
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
            },
            plugins: [doughnutLabel2],
            });
            //bar chart test config
            new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        borderWidth: 1
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                scales: {
                y: {
                beginAtZero: true
                }
            }
        }
    });

            new Chart(ctx4, {
                type: 'line',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        borderWidth: 1
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                scales: {
                y: {
                beginAtZero: true
                }
            }
        }
    });

    const monthYearElement = document.getElementById('monthYear');
    const datesElement = document.getElementById('dates');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentDate = new Date();

    const updateCalendar = () => {
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        const firstDay = new Date(currentYear, currentMonth, 0);
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const totalDays = lastDay.getDate();
        const firstDayIndex = firstDay.getDay();
        const lastDayIndex = lastDay.getDay();

        const monthYearString = currentDate.toLocaleString
        ('default', {month: 'long', year: 'numeric'});
        monthYearElement.textContent = monthYearString;

        let datesHTML = '';

        for(let i = firstDayIndex; i > 0; i--) {
            const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
            datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
        }

        for(let i = 1; i <= totalDays; i++) {
            const date = new Date(currentYear, currentMonth, i);
            const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
            datesHTML += `<div class="date ${activeClass}">${i}</div>`;           
        }

        for(let i = 1; i <= 7 - lastDayIndex; i++) {
            const nextDate = new Date(currentYear, currentMonth + 1, i);
            datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;        
        }

        datesElement.innerHTML = datesHTML;
    }

    prevBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1)
        updateCalendar();
    })

    nextBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1)
        updateCalendar();
    })

    updateCalendar();

