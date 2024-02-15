// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
// //console.log("asdasd", Eaten);
// Pie Chart Example
let eaten = parseInt(sessionStorage.getItem('eaten'))
let total = parseInt(sessionStorage.getItem('total'))
//console.log("eaten", eaten);
//console.log("total", total);
let eat_total = 0
if (eaten && total) {
  eat_total = total - eaten
  if (eat_total < 0) {
    eat_total = 0
  }
} else {

}
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Eaten", "Total",],
    datasets: [{
      data: [eaten, eat_total],
      backgroundColor: ['#FF8A00', '#e8e8e8'],
      hoverBackgroundColor: ['#ffae51', '#e8e8e8'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
