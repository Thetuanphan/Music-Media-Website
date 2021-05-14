// // audio play
// $(function() {
//     //your code here

//    // loads the audio player
//    audioPlayer();
//    function audioPlayer() {
//        var currentSong = 0;
//        $("#audioPlayer")[0].src = $("#playlist li a")[0];
//        // $("#audioPlayer")[0].play();
//        $("#playlist li a").click(function (e) {
//            e.preventDefault();
//            $("#audioPlayer")[0].src = this;
//            $("#audioPlayer")[0].play();
//            $("#playlist li").removeClass("current-song");
//            currentSong = $(this).parent().index();
//            $(this).parent().addClass("current-song");
//        });

//        $("#audioPlayer")[0].addEventListener("ended", function () {
//            currentSong++;
//            if (currentSong == $("#playlist li a").length)
//                currentSong = 0;
//            $("#playlist li").removeClass("current-song");
//            $("#playlist li:eq(" + currentSong + ")").addClass("current-song");
//            $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
//            $("#audioPlayer")[0].play();
//        });
//    }

//    // chart
//    //chart views
//    var ctx = document.getElementById("myChart").getContext('2d');
//    var myChart = new Chart(ctx, {
//        type: 'bar',
//        data: {
//            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
//            datasets: [{
//                label: 'views (tr)',
//                data: [12, 19, 3, 5, 2, 3, 8, 5, 6, 3, 8, 10],
//                backgroundColor: [
//                    'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'
//                ]

//            }]
//        },
//        options: {
//            scales: {
//                yAxes: [{
//                    ticks: {
//                        beginAtZero: true
//                    }
//                }]
//            }
//        }
//    });
//    //chart 

//    //pie
//    var ctxP = document.getElementById("pieChart").getContext('2d');
//    var myPieChart = new Chart(ctxP, {
//        plugins: [ChartDataLabels],
//        type: 'pie',
//        data: {
//            labels: ["Xem trực tiếp", "Tải về", "share",],
//            datasets: [{
//                data: [210, 130, 120],
//                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
//                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
//            }]
//        },
//        options: {
//            responsive: true,
//            legend: {
//                position: 'right',
//                labels: {
//                    padding: 30,
//                    boxWidth: 10
                   
//                }
//            },
//            plugins: {
//                datalabels: {
//                    formatter: (value, ctx) => {
//                        let sum = 0;
//                        let dataArr = ctx.chart.data.datasets[0].data;
//                        dataArr.map(data => {
//                            sum += data;
//                        });
//                        let percentage = (value * 100 / sum).toFixed(2) + "%";
//                        return percentage;
//                    },
//                    color: 'white',
//                    labels: {
//                        title: {
//                            font: {
//                                size: '12'
//                            }
//                        }
//                    }
//                }
//            }
//        }
//    });
// //
//    $(".next_show").hide();
//         $("#pre").click(function () {
//             $(".pre_show").show(); $(".next_show").hide();
//         });
//         $("#next").click(function () {
//             $(".next_show").show(); $(".pre_show").hide();
//         });

//         //add
//         var btnAdd = $('#btn_add');
//         var contentList = $(".list_Item").html();

//         btnAdd.click(function () {
//             var newSong = $('#addnewsong_box').val();
//             $("#listsong").append('<li class="list_Item"></li>');
//             $(".list_Item:last-child").append(contentList);
//             $(".list_Item:last-child .listItem--title").text(function (origText) {
//                 return newSong;
//             });
//             var index = $(".list_Item:last-child").index();
//             $(".list_Item:last-child").attr('id', 'song-' + index + '');

//             $('.list_Item:last-child').find("a.remove_song").attr('id', 'delete-song-' + index + '');
            
//         });
//         //remove
//        function acctionRemove() {
//         $('.remove_song').click(function () {
//             var currentId = this.id;
//             var index = currentId.slice(-1);
//             $("#song-" + index + "").remove();

//             index--;
//             while (index < $('.list_Item').length) {
//                 $('#song-' + (index + 1) + '').attr('id', 'song-' + index + '');
//                 $('#delete-song-' + (index + 1) + '').attr('id', 'delete-song-' + index + '');
//                 index++;
//             }
//         })};

//         $('#actionRemove').click(function (){
//             $('.remove_song').removeClass("hide");
//         })

//     });
$(document).ready(function() {
    //your code here


$(".next_show").hide();
$("#pre").click(function () {
    $(".pre_show").show(); $(".next_show").hide();
});
$("#next").click(function () {
    $(".next_show").show(); $(".pre_show").hide();
});

// //add
// var btnAdd = $('#btn_add');
// var contentList = $(".list_Item").html();

// btnAdd.click(function () {
//     var newSong = $('#addnewsong_box').val();
//     $("#listsong").append('<li class="list_Item"></li>');
//     $(".list_Item:last-child").append(contentList);
//     $(".list_Item:last-child .listItem--title").text(function (origText) {
//         return newSong;
//     });
//     var index = $(".list_Item:last-child").index();
//     $(".list_Item:last-child").attr('id', 'song-' + index + '');

//     $('.list_Item:last-child').find("a.remove_song").attr('id', 'delete-song-' + index + '');
    
// });
// //remove
// function acctionRemove() {
// $('.remove_song').click(function () {
//     var currentId = this.id;
//     var index = currentId.slice(-1);
//     $("#song-" + index + "").remove();

//     index--;
//     while (index < $('.list_Item').length) {
//         $('#song-' + (index + 1) + '').attr('id', 'song-' + index + '');
//         $('#delete-song-' + (index + 1) + '').attr('id', 'delete-song-' + index + '');
//         index++;
//     }
// })};

// $('#actionRemove').click(function (){
//     $('.remove_song').removeClass("hide");
// });


 // chart
        //chart views
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                datasets: [{
                    label: 'views (tr)',
                    data: [12, 19, 3, 5, 2, 3, 8, 5, 6, 3, 8, 10],
                    backgroundColor: [
                        'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'
                    ]

                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        //chart 

        //pie
        var ctxP = document.getElementById("pieChart").getContext('2d');
        var myPieChart = new Chart(ctxP, {
            plugins: [ChartDataLabels],
            type: 'pie',
            data: {
                labels: ["Xem trực tiếp", "Tải về", "share",],
                datasets: [{
                    data: [210, 130, 120],
                    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
                    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
                }]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'right',
                    labels: {
                        padding: 30,
                        boxWidth: 10
                        
                    }
                },
                plugins: {
                    datalabels: {
                        formatter: (value, ctx) => {
                            let sum = 0;
                            let dataArr = ctx.chart.data.datasets[0].data;
                            dataArr.map(data => {
                                sum += data;
                            });
                            let percentage = (value * 100 / sum).toFixed(2) + "%";
                            return percentage;
                        },
                        color: 'white',
                        labels: {
                            title: {
                                font: {
                                    size: '12'
                                }
                            }
                        }
                    }
                }
            }
        });
        // //audio player
        // audioPlayer();
        // function audioPlayer() {
        //     var currentSong = 0;
        //     $("#audioPlayer")[0].src = $("#playlist li a")[0];
        //     // $("#audioPlayer")[0].play();
        //     $("#playlist li a").click(function (e) {
        //         e.preventDefault();
        //         $("#audioPlayer")[0].src = this;
        //         $("#audioPlayer")[0].play();
        //         $("#playlist li").removeClass("current-song");
        //         currentSong = $(this).parent().index();
        //         $(this).parent().addClass("current-song");
        //     });

        //     $("#audioPlayer")[0].addEventListener("ended", function () {
        //         currentSong++;
        //         if (currentSong == $("#playlist li a").length)
        //             currentSong = 0;
        //         $("#playlist li").removeClass("current-song");
        //         $("#playlist li:eq(" + currentSong + ")").addClass("current-song");
        //         $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
        //         $("#audioPlayer")[0].play();
        //     });
        // }

});