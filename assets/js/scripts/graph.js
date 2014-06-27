function dataGraph(){
    var data = [[1, 130], [2, 40], [3, 80], [4, 160], [5, 159], [6, 370], [7, 330], [8, 350], [9, 370], [10, 400], [11, 330], [12, 350]];
 
        var dataset = [{label: "line1",data: data}];
 
        var options = {
            series: {
                lines: { show: true },
                points: {
                    radius: 3,
                    show: true
                }
            }
        };
 
        $(document).ready(function () {
            $.plot($("#flot-placeholder"), dataset, options);
        });
}

function PDFBuku(){window.open(url_pdf_buku)}
function excelBuku(){window.open(url_excel_buku)}