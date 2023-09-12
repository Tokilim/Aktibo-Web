
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
                scales: {
                y: {
                beginAtZero: true
                }
            }
        }
    });
