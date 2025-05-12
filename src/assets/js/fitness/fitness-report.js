/*! Histórico de Avaliações | DNA do Brasil 2024-2025 */

'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // Dados de avaliação
    const dadosAtuais = {
        imc: 24.7,
        preensao: 42.3,
        impulsao: 185,
        aptidao: 37.8,
        flexibilidade: 28,
        velocidade: 3.8,
        agilidade: 9.2,
    };

    const dadosAnteriores = {
        imc: 12.35,
        preensao: 21.15,
        impulsao: 92.5,
        aptidao: 18.9,
        flexibilidade: 14,
        velocidade: 7.6,
        agilidade: 18.4,
    };

    // Calcula porcentagem de melhoria
    const melhoriaPorcentagem = {};
    Object.keys(dadosAtuais).forEach((key) => {
        // Para velocidade e agilidade, menor é melhor (tempo)
        if (key === 'velocidade' || key === 'agilidade') {
            const reducao = dadosAnteriores[key] - dadosAtuais[key];
            const porcentagem = (reducao / dadosAnteriores[key]) * 100;
            melhoriaPorcentagem[key] = Math.round(porcentagem);
        } else {
            const aumento = dadosAtuais[key] - dadosAnteriores[key];
            const porcentagem = (aumento / dadosAnteriores[key]) * 100;
            melhoriaPorcentagem[key] = Math.round(porcentagem);
        }
    });

    /* Círculo de progresso do talento */
    var talentoCircle = new ProgressBar.Circle(talentoProgressCircle, {
        color: 'rgba(255, 255, 255, 1)',
        strokeWidth: 5,
        trailWidth: 5,
        easing: 'easeInOut',
        trailColor: 'rgba(255, 255, 255, 0.3)',
        duration: 1400,
        from: { color: 'rgba(255, 255, 255, 1)', width: 5 },
        to: { color: 'rgba(255, 255, 255, 1)', width: 5 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        },
    });
    talentoCircle.animate(0.76); // 76% de talento

    /* Círculo de progresso para talento detalhado */
    var circleOrange = new ProgressBar.Circle(circleprogressorange2, {
        color: '#ed9c28',
        strokeWidth: 8,
        trailWidth: 8,
        easing: 'easeInOut',
        trailColor: 'rgba(237, 156, 40, 0.2)',
        duration: 1400,
        text: {
            autoStyleContainer: false,
        },
        from: { color: '#ed9c28', width: 8 },
        to: { color: '#ed9c28', width: 8 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        },
    });
    circleOrange.animate(0.76); // 76% de talento

    /* Gráfico de evolução */
    var evolucaoCtx = document.getElementById('evolucaoChart').getContext('2d');
    var evolucaoGradient = evolucaoCtx.createLinearGradient(0, 0, 0, 180);
    evolucaoGradient.addColorStop(0, 'rgba(40, 167, 69, 0.8)');
    evolucaoGradient.addColorStop(1, 'rgba(40, 167, 69, 0.2)');

    var evolucaoChart = new Chart(evolucaoCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [
                {
                    label: 'Pontuação de Talento',
                    data: [30, 35, 45, 60, 68, 76],
                    backgroundColor: evolucaoGradient,
                    borderColor: '#28a745',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#28a745',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4,
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
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#28a745',
                    borderWidth: 1,
                    callbacks: {
                        label: function (context) {
                            return `Pontuação: ${context.parsed.y} (${
                                context.dataIndex > 0
                                    ? '+' + (context.parsed.y - context.dataset.data[context.dataIndex - 1])
                                    : '0'
                            })`;
                        },
                    },
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.05)',
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },
                },
            },
        },
    });

    /* Gráfico de radar de talento */
    var radarCtx = document.getElementById('radarTalentoChart').getContext('2d');
    var radarChart = new Chart(radarCtx, {
        type: 'radar',
        data: {
            labels: [
                'IMC',
                'Preensão Manual',
                'Impulsão Horizontal',
                'Aptidão Física',
                'Flexibilidade',
                'Velocidade',
                'Agilidade',
            ],
            datasets: [
                {
                    label: 'Avaliação Atual',
                    data: [85, 70, 82, 75, 68, 88, 78],
                    backgroundColor: 'rgba(40, 167, 69, 0.2)',
                    borderColor: '#28a745',
                    pointBackgroundColor: '#28a745',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#28a745',
                },
                {
                    label: 'Avaliação Anterior',
                    data: [42, 35, 41, 37, 34, 44, 39],
                    backgroundColor: 'rgba(0, 123, 255, 0.2)',
                    borderColor: '#007bff',
                    pointBackgroundColor: '#007bff',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#007bff',
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                line: {
                    borderWidth: 2,
                },
            },
            scales: {
                r: {
                    angleLines: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.1)',
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    pointLabels: {
                        font: {
                            size: 11,
                        },
                    },
                },
            },
            plugins: {
                legend: {
                    position: 'bottom',
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const datasetLabel = context.dataset.label;
                            const value = context.raw;
                            const index = context.dataIndex;

                            if (context.datasetIndex === 0) {
                                // Avaliação atual
                                const melhoria = value - context.chart.data.datasets[1].data[index];
                                const porcentagemMelhoria = Math.round(
                                    (melhoria / context.chart.data.datasets[1].data[index]) * 100,
                                );
                                return `${datasetLabel}: ${value}% (↑${porcentagemMelhoria}%)`;
                            }
                            return `${datasetLabel}: ${value}%`;
                        },
                    },
                },
            },
        },
    });

    // Event listener para o seletor de avaliação
    document.getElementById('avaliacaoSelect').addEventListener('change', function (e) {
        const selecionado = e.target.value;

        // Aqui você pode implementar a lógica para mudar os dados mostrados
        // com base na avaliação selecionada
        if (selecionado === 'anterior') {
            // Lógica para mostrar apenas a avaliação anterior
        } else if (selecionado === 'completo') {
            // Lógica para mostrar o histórico completo
        } else {
            // Avaliação atual (padrão)
        }
    });

    // Função para atualizar os badges com as porcentagens de melhoria
    function atualizarBadgesMelhoria() {
        const badges = document.querySelectorAll('.badge.bg-success');
        badges.forEach((badge) => {
            badge.textContent = '+100%';
        });
    }

    // Inicializa os badges
    atualizarBadgesMelhoria();
});
