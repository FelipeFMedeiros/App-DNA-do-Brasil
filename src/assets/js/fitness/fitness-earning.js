/*! Fitness earning.js | Adminuiux 2023-2024 */

"use strict";

document.addEventListener("DOMContentLoaded", function () {

    /* chart js areachart summary  */
    window.randomScalingFactor = function () {
        return Math.round(Math.random() * 20);
    }

    /* summary chart */
    var areachart2 = document.getElementById('earningbyday').getContext('2d');
    var gradient2 = areachart2.createLinearGradient(0, 0, 0, 180);
    gradient2.addColorStop(0, 'rgba(252, 122, 30, 0.85)');
    gradient2.addColorStop(1, 'rgba(252, 122, 30, 0)');
    var gradient1 = areachart2.createLinearGradient(0, 0, 0, 180);
    gradient1.addColorStop(0, 'rgba(82, 97, 161, 0.75)');
    gradient1.addColorStop(0.7, 'rgba(202, 65, 207, 0.35)');
    gradient1.addColorStop(1, 'rgba(65, 176, 207, 0)');
    var myareachartCofig2 = {
        type: 'line',
        data: {
            labels: ['1/9', '2/9', '3/9', '4/9', '5/9', '6/9', '7/9'],
            datasets: [{
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
                ],
                radius: 0,
                backgroundColor: gradient2,
                borderColor: 'rgba(252, 122, 30, 1)',
                borderWidth: 1,
                fill: true,                
                tension: 0.5,
            },
            {
                label: 'earning of Votes',
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
                ],
                radius: 0,
                backgroundColor: gradient1,
                borderColor: 'rgba(82, 97, 161, 1)',
                borderWidth: 1,
                fill: true,                
                tension: 0.5,
            }]
        },
        options: {
            maintainAspectRatio: false,
            barThickness: 16,
            borderRadius: 2,
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

})