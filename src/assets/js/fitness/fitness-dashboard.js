/*! Fitness dashboard.js | Adminuiux 2023-2024 */

'use strict';

document.addEventListener('DOMContentLoaded', function () {
    /* chart js areachart summary  */
    window.randomScalingFactor = function () {
        return Math.round(Math.random() * 20);
    };

    // Verifique se o elemento existe antes de tentar acessá-lo
    if (document.getElementById('areachartblue1')) {
        var areachartblue = document.getElementById('areachartblue1').getContext('2d');
        var gradientblue = areachartblue.createLinearGradient(0, 0, 0, 100);
        gradientblue.addColorStop(0, 'rgba(3, 174, 210, 1)');
        gradientblue.addColorStop(1, 'rgba(3, 174, 210, 0)');
        var myareachartblue = {
            type: 'bar',
            data: {
                labels: ['1', '2', '3', '4', '5', '7', '8', '9', '10', '11', '12'],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                        ],
                        radius: 0,
                        backgroundColor: gradientblue,
                        borderColor: '#015EC2',
                        borderWidth: 0,
                        borderRadius: 4,
                        fill: true,
                        tension: 0.5,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: true,
                    },
                },
                scales: {
                    y: {
                        display: false,
                        beginAtZero: true,
                    },
                    x: {
                        display: false,
                    },
                },
            },
        };
        var myAreaChartblue1 = new Chart(areachartblue, myareachartblue);
        /* my area chart randomize */
        setInterval(function () {
            myareachartblue.data.datasets.forEach(function (dataset) {
                dataset.data = dataset.data.map(function () {
                    return randomScalingFactor();
                });
            });
            myAreaChartblue1.update();
        }, 3000);
    }

    /* summary chart */
    if (document.getElementById('summarychart')) {
        var areachart2 = document.getElementById('summarychart').getContext('2d');
        var gradient2 = areachart2.createLinearGradient(0, 0, 0, 180);
        gradient2.addColorStop(0, 'rgba(252, 122, 30, 0.85)');
        gradient2.addColorStop(1, 'rgba(252, 122, 30, 0)');

        // Dados para os diferentes períodos
        const chartData = {
            daily: {
                labels: ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
                data: [6.5, 7.2, 8.4, 7.8, 8.9, 8.5],
                media: '7.88',
                modalidades: '3',
            },
            weekly: {
                labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
                data: [6.8, 7.5, 8.1, 7.4, 8.5, 9.2, 8.7],
                media: '8.03',
                modalidades: '5',
            },
            monthly: {
                labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
                data: [7.2, 8.0, 8.5, 9.1],
                media: '8.20',
                modalidades: '7',
            },
        };

        // Configuração inicial do gráfico (usando dados diários por padrão)
        var myareachartConfig2 = {
            type: 'line',
            data: {
                labels: chartData.daily.labels,
                datasets: [
                    {
                        label: 'Desempenho',
                        data: chartData.daily.data,
                        radius: 3,
                        backgroundColor: gradient2,
                        borderColor: '#FC7A1E',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#FC7A1E',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        titleFont: {
                            size: 13,
                        },
                        bodyFont: {
                            size: 13,
                        },
                        padding: 10,
                        displayColors: false,
                    },
                },
                scales: {
                    y: {
                        display: true,
                        beginAtZero: false,
                        min: 5,
                        max: 10,
                        grid: {
                            color: 'rgba(0,0,0,0.05)',
                        },
                        ticks: {
                            font: {
                                size: 11,
                            },
                        },
                    },
                    x: {
                        grid: {
                            display: false,
                        },
                        display: true,
                        ticks: {
                            font: {
                                size: 11,
                            },
                        },
                    },
                },
                interaction: {
                    intersect: false,
                    mode: 'index',
                },
                elements: {
                    point: {
                        radius: 3,
                        hoverRadius: 6,
                    },
                },
            },
        };

        // Cria o gráfico inicial
        var myAreaChart2 = new Chart(areachart2, myareachartConfig2);

        // Adiciona event listeners aos botões
        document.querySelectorAll('[data-period]').forEach((button) => {
            button.addEventListener('click', function () {
                // Remove a classe active de todos os botões
                document.querySelectorAll('[data-period]').forEach((btn) => {
                    btn.classList.remove('active');
                });

                // Adiciona a classe active ao botão clicado
                this.classList.add('active');

                // Obtém o período selecionado
                const period = this.getAttribute('data-period');

                // Atualiza o gráfico com os dados do período selecionado
                updateChart(period);
            });
        });

        // Função para atualizar o gráfico
        function updateChart(period) {
            // Atualiza os dados do gráfico
            myAreaChart2.data.labels = chartData[period].labels;
            myAreaChart2.data.datasets[0].data = chartData[period].data;

            // Atualiza as estatísticas
            document.getElementById('media-nota').textContent = chartData[period].media;
            document.getElementById('modalidades').textContent = chartData[period].modalidades;

            // Redesenha o gráfico
            myAreaChart2.update();
        }
    }

    /* heart line chart */
    if (document.getElementById('lineheart')) {
        var lineheartchart = document.getElementById('lineheart').getContext('2d');
        /* my area chart randomize */
        setInterval(function () {
            lineheartConfig.data.datasets.forEach(function (dataset) {
                dataset.data = dataset.data.map(function () {
                    return randomScalingFactor();
                });
            });
            lineheart.update();
        }, 3000);
    }

    /* doughnut chart js - Score DNA */
    if (document.getElementById('doughnutchart')) {
        // Obtém os pontos das categorias do laudo
        const scoreSaude = 85;
        const scoreTalento = 76;
        const scoreConsumo = 92;
        const scoreBucal = 65;
        const scoreQualidade = 78;
        const scoreVocacional = 88;

        // Calcula o score total
        const scoreTotal = scoreSaude + scoreTalento + scoreConsumo + scoreBucal + scoreQualidade + scoreVocacional;

        // Atualiza o valor total no HTML
        if (document.getElementById('score-dna-total')) {
            document.getElementById('score-dna-total').textContent = scoreTotal;
        }

        // Prepara os dados para o gráfico
        var doughnutchart = document.getElementById('doughnutchart').getContext('2d');
        var doughnutdata = {
            labels: [
                'Saúde',
                'Talento Esportivo',
                'Consumo Alimentar',
                'Saúde Bucal',
                'Qualidade de Vida',
                'Vocacional',
            ],
            datasets: [
                {
                    label: 'Pontos',
                    data: [scoreSaude, scoreTalento, scoreConsumo, scoreBucal, scoreQualidade, scoreVocacional],
                    backgroundColor: ['#d2322d', '#ed9c28', '#47a447', '#5bc0de', '#00a4a9', '#9c27b0'],
                    borderWidth: 0,
                },
            ],
        };

        var mydoughnutchartCofig = {
            type: 'doughnut',
            data: doughnutdata,
            options: {
                responsive: true,
                cutout: 75,
                tooltips: {
                    position: 'nearest',
                    yAlign: 'bottom',
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                const percentage = Math.round((value / scoreTotal) * 100);
                                return `${label}: ${value} pontos (${percentage}%)`;
                            },
                        },
                    },
                },
                animation: {
                    animateScale: true,
                    animateRotate: true,
                },
            },
        };

        var mydoughnutchart = new Chart(doughnutchart, mydoughnutchartCofig);
    }

    /* circular progress */
    if (document.getElementById('circleprogressblue1')) {
        var progressCirclesblue1 = new ProgressBar.Circle(circleprogressblue1, {
            color: 'rgba(72, 86, 150, 1)',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 10,
            trailWidth: 10,
            easing: 'easeInOut',
            trailColor: 'rgba(72, 86, 150, 0.15)',
            duration: 1400,
            text: {
                autoStyleContainer: false,
            },
            from: { color: 'rgba(72, 86, 150, 1)', width: 10 },
            to: { color: 'rgba(72, 86, 150, 1)', width: 10 },
            // Set default step function for all animate calls
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                    circle.setText('');
                } else {
                    circle.setText(value + '<small>%<small>');
                }
            },
        });
        // progressCirclesblue1.text.style.fontSize = '20px';
        progressCirclesblue1.animate(0.85); // Number from 0.0 to 1.0
    }

    /* circular progress */
    if (document.getElementById('circleprogressblue2')) {
        var progressCirclesgreen1 = new ProgressBar.Circle(circleprogressgreen1, {
            color: 'rgba(252, 122, 30, 1)',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 10,
            trailWidth: 10,
            easing: 'easeInOut',
            trailColor: 'rgba(252, 122, 30, 0.15)',
            duration: 1400,
            text: {
                autoStyleContainer: false,
            },
            from: { color: 'rgba(252, 122, 30, 1)', width: 10 },
            to: { color: 'rgba(252, 122, 30, 1)', width: 10 },
            // Set default step function for all animate calls
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                    circle.setText('');
                } else {
                    circle.setText(value + '<small>%<small>');
                }
            },
        });
        // progressCirclesgreen1.text.style.fontSize = '20px';
        progressCirclesgreen1.animate(0.65); // Number from 0.0 to 1.0
    }

    /* green circular progress */
    if (document.getElementById('circleprogressgreen2')) {
        var progressCirclesgreen2 = new ProgressBar.Circle(circleprogressgreen2, {
            color: 'rgba(8, 160, 70, 1)',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 5,
            trailWidth: 10,
            easing: 'easeInOut',
            trailColor: 'rgba(8, 160, 70, 0.15)',
            duration: 1400,
            text: {
                autoStyleContainer: false,
            },
            from: { color: 'rgba(8, 160, 70, 0)', width: 5 },
            to: { color: 'rgba(8, 160, 70, 1)', width: 5 },
            // Set default step function for all animate calls
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);
            },
        });
        // progressCirclesgreen2.text.style.fontSize = '20px';
        progressCirclesgreen2.animate(0.7); // Number from 0.0 to 1.0
    }

    // /* purple circular progress */
    if (document.getElementById('circleprogresspurple1')) {
        var progressCirclespurple1 = new ProgressBar.Circle(circleprogresspurple1, {
            color: 'rgba(71, 28, 168, 1)',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 10,
            trailWidth: 10,
            easing: 'easeInOut',
            trailColor: 'rgba(71, 28, 168, 0.15)',
            duration: 1400,
            text: {
                autoStyleContainer: false,
            },
            from: { color: 'rgba(71, 28, 168, 1)', width: 10 },
            to: { color: 'rgba(71, 28, 168, 1)', width: 10 },
            // Set default step function for all animate calls
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                    circle.setText('');
                } else {
                    circle.setText(value + '<small>%<small>');
                }
            },
        });
        progressCirclespurple1.text.style.fontSize = '16px';
        progressCirclespurple1.animate(0.5); // Number from 0.0 to 1.0
    }

    /* orange progress */
    if (document.getElementById('circleprogressorange1')) {
        var progressCirclesorange1 = new ProgressBar.Circle(circleprogressorange1, {
            color: 'rgba(252, 122, 30, 1)',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 8,
            trailWidth: 2,
            easing: 'easeInOut',
            trailColor: 'rgba(252, 122, 30, 0.15)',
            duration: 1400,
            text: {
                autoStyleContainer: false,
            },
            from: { color: 'rgba(252, 122, 30, 0)', width: 8 },
            to: { color: 'rgba(252, 122, 30, 1)', width: 8 },
            // Set default step function for all animate calls
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);
            },
        });
        // progressCirclesgreen1.text.style.fontSize = '20px';
        progressCirclesorange1.animate(0.65); // Number from 0.0 to 1.0
    }

    /* Saúde - Red circular progress */
    var progressCirclesRed1 = new ProgressBar.Circle(circleprogressred1, {
        color: 'rgba(255, 255, 255, 0.8)',
        strokeWidth: 5,
        trailWidth: 10,
        easing: 'easeInOut',
        trailColor: 'rgba(255, 255, 255, 0.2)',
        duration: 1400,
        from: { color: 'rgba(255, 255, 255, 0.8)', width: 5 },
        to: { color: 'rgba(255, 255, 255, 0.8)', width: 5 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        },
    });
    progressCirclesRed1.animate(0.85); // 85%

    /* Talento Esportivo - Orange circular progress */
    var progressCirclesOrange2 = new ProgressBar.Circle(circleprogressorange2, {
        color: 'rgba(255, 255, 255, 0.8)',
        strokeWidth: 5,
        trailWidth: 10,
        easing: 'easeInOut',
        trailColor: 'rgba(255, 255, 255, 0.2)',
        duration: 1400,
        from: { color: 'rgba(255, 255, 255, 0.8)', width: 5 },
        to: { color: 'rgba(255, 255, 255, 0.8)', width: 5 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        },
    });
    progressCirclesOrange2.animate(0.76); // 76%

    /* Consumo Alimentar - Green circular progress */
    var progressCirclesGreen3 = new ProgressBar.Circle(circleprogressgreen3, {
        color: 'rgba(255, 255, 255, 0.8)',
        strokeWidth: 5,
        trailWidth: 10,
        easing: 'easeInOut',
        trailColor: 'rgba(255, 255, 255, 0.2)',
        duration: 1400,
        from: { color: 'rgba(255, 255, 255, 0.8)', width: 5 },
        to: { color: 'rgba(255, 255, 255, 0.8)', width: 5 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        },
    });
    progressCirclesGreen3.animate(0.92); // 92%

    /* Saúde Bucal - Blue circular progress */
    var progressCirclesBlue2 = new ProgressBar.Circle(circleprogressblue2, {
        color: 'rgba(255, 255, 255, 0.8)',
        strokeWidth: 5,
        trailWidth: 10,
        easing: 'easeInOut',
        trailColor: 'rgba(255, 255, 255, 0.2)',
        duration: 1400,
        from: { color: 'rgba(255, 255, 255, 0.8)', width: 5 },
        to: { color: 'rgba(255, 255, 255, 0.8)', width: 5 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        },
    });
    progressCirclesBlue2.animate(0.65); // 65%

    /* Qualidade de Vida - Teal circular progress */
    var progressCirclesTeal1 = new ProgressBar.Circle(circleprogressteal1, {
        color: 'rgba(255, 255, 255, 0.8)',
        strokeWidth: 5,
        trailWidth: 10,
        easing: 'easeInOut',
        trailColor: 'rgba(255, 255, 255, 0.2)',
        duration: 1400,
        from: { color: 'rgba(255, 255, 255, 0.8)', width: 5 },
        to: { color: 'rgba(255, 255, 255, 0.8)', width: 5 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        },
    });
    progressCirclesTeal1.animate(0.78); // 78%

    /* Vocacional - Purple circular progress */
    var progressCirclesPurple2 = new ProgressBar.Circle(circleprogresspurple2, {
        color: 'rgba(255, 255, 255, 0.8)',
        strokeWidth: 5,
        trailWidth: 10,
        easing: 'easeInOut',
        trailColor: 'rgba(255, 255, 255, 0.2)',
        duration: 1400,
        from: { color: 'rgba(255, 255, 255, 0.8)', width: 5 },
        to: { color: 'rgba(255, 255, 255, 0.8)', width: 5 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        },
    });
    progressCirclesPurple2.animate(0.88); // 88%
});
