/*! Fitness dashboard.js | Adminuiux 2023-2024 */

'use strict';

document.addEventListener('DOMContentLoaded', function () {
    /* chart js */
    window.randomScalingFactor = function () {
        return Math.round(Math.random() * 20);
    };

    /* Score DNA donut chart */
    if (document.getElementById('scoreDonutChart')) {
        // Pontuações das categorias
        const scoreSaude = 85;
        const scoreTalento = 76;
        const scoreConsumo = 92;
        const scoreBucal = 65;
        const scoreQualidade = 78;
        const scoreVocacional = 88;

        // Score total
        const scoreTotal = scoreSaude + scoreTalento + scoreConsumo + scoreBucal + scoreQualidade + scoreVocacional;

        // Atualizar o valor no HTML
        if (document.getElementById('score-dna-total')) {
            document.getElementById('score-dna-total').textContent = scoreTotal;
        }

        // Configuração do gráfico
        const ctx = document.getElementById('scoreDonutChart').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
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
                        data: [scoreSaude, scoreTalento, scoreConsumo, scoreBucal, scoreQualidade, scoreVocacional],
                        backgroundColor: ['#d2322d', '#ed9c28', '#47a447', '#5bc0de', '#00a4a9', '#9c27b0'],
                        borderWidth: 0,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        z: 10, // Higher z-index than the white circle
                        position: 'nearest',
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderWidth: 0,
                    },
                },
                animation: {
                    animateScale: true,
                    animateRotate: true,
                },
            },
        });
    }

    // Talento Esportivo - Orange circular progress
    if (document.getElementById('circleprogressorange2')) {
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
    }

    // Saúde - Red circular progress
    if (document.getElementById('circleprogressred1')) {
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
    }

    // Consumo Alimentar - Green circular progress
    if (document.getElementById('circleprogressgreen3')) {
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
    }

    // Saúde Bucal - Blue circular progress
    if (document.getElementById('circleprogressblue2')) {
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
    }

    // Qualidade de Vida - Teal circular progress
    if (document.getElementById('circleprogressteal1')) {
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
    }

    // Vocacional - Purple circular progress
    if (document.getElementById('circleprogresspurple2')) {
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
    }
});
