/*! Fitness dashboard.js | Adminuiux 2023-2024 */

"use strict";

document.addEventListener("DOMContentLoaded", function () {
    /* chart js */
    window.randomScalingFactor = function () {
        return Math.round(Math.random() * 20);
    }
    /* summary chart */
    var areachart2 = document.getElementById('summarychart').getContext('2d');
    var gradient2 = areachart2.createLinearGradient(0, 0, 0, 180);
    gradient2.addColorStop(0, 'rgba(252, 122, 30, 0.85)');
    gradient2.addColorStop(1, 'rgba(252, 122, 30, 0)');

    var myareachartCofig2 = {
        type: 'line',
        data: {
            labels: ['10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30'],
            datasets: [{
                label: '# of hours',
                data: [
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
                backgroundColor: gradient2,
                borderColor: '#5840ef',
                borderWidth: 0,
                fill: true,
                tension: 0.5,
            }]
        },
        options: {
            animation: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                y: {
                    display: false,
                    beginAtZero: true,
                },
                x: {
                    grid: {
                        display: false
                    },
                    display: true,
                    beginAtZero: true,
                }
            }
        }
    }
    var myAreaChart2 = new Chart(areachart2, myareachartCofig2);
    /* my area chart randomize */
    setInterval(function () {
        myareachartCofig2.data.datasets.forEach(function (dataset) {
            dataset.data = dataset.data.map(function () {
                return randomScalingFactor();
            });
        });
        myAreaChart2.update();
    }, 3000);


    /* circular progress */
    var progressCirclesblue1 = new ProgressBar.Circle(circleprogressblue1, {
        color: 'rgba(8, 160, 70, 1)',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        trailColor: 'rgba(8, 160, 70, 0.15)',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: 'rgba(8, 160, 70, 1)', width: 10 },
        to: { color: 'rgba(8, 160, 70, 1)', width: 10 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + "<small>%<small>");
            }

        }
    });
    // progressCirclesblue1.text.style.fontSize = '20px';
    progressCirclesblue1.animate(0.85);  // Number from 0.0 to 1.0

    /* circular progress */
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
            autoStyleContainer: false
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
                circle.setText(value + "<small>%<small>");
            }

        }
    });
    // progressCirclesgreen1.text.style.fontSize = '20px';
    progressCirclesgreen1.animate(0.65);  // Number from 0.0 to 1.0



})