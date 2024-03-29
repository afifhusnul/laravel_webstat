function dataBuku(){
    $("title").text("Data Buku");link("#link-buku");
    $(".konten").load(url_data_buku,function(){ properti()})
}

function urutBuku(){
    var e=$("#kolom-buku").find(":selected").val();
    var t=$("#tipe-buku").find(":selected").val();
    $(".konten").load(url_urut_buku+"/"+e+"/"+t,function(){properti()})
}

function cariBuku(){
    var e=$("#cari-buku").val().trim();
    if(e==""){notif("Inputan judul harus diisi","error")
    }else{
        $(".konten").load(url_cari_buku+"/"+encodeURIComponent(e),function(){properti()})
    }
}

function modalLihatBuku(e){
    $(".modal").load(url_cover_buku+"/"+e,function(){$(".modal").modal("show")})
}

function modalTambahBuku(){
    $(".modal").load(url_tambah_buku,function(){$(".modal").modal("show")})
}

function enterTambahBuku(e){
    if(e.which==13)tambahBuku()
}

function tambahBuku(){
    $(".form-tambah-buku").ajaxSubmit({success:function(e){
            if(e.status==""){if(e.cover){
                    $("#control-cover").removeClass("info").addClass("error");$("#error-cover").text(e.cover)
                }else{
                    $("#control-cover").removeClass("error").addClass("info");$("#error-cover").text("")
                }if(e.judul){$("#control-judul").removeClass("info").addClass("error");$("#error-judul").text(e.judul)
                }else{$("#control-judul").removeClass("error").addClass("info");$("#error-judul").text("")
                }if(e.penulis){$("#control-penulis").removeClass("info").addClass("error");$("#error-penulis").text(e.penulis)
                }else{$("#control-penulis").removeClass("error").addClass("info");$("#error-penulis").text("")
                }if(e.penerbit){$("#control-penerbit").removeClass("info").addClass("error");$("#error-penerbit").text(e.penerbit)
                }else{$("#control-penerbit").removeClass("error").addClass("info");$("#error-penerbit").text("")
                }if(e.tahun){$("#control-tahun").removeClass("info").addClass("error");$("#error-tahun").text(e.tahun)
                }else{$("#control-tahun").removeClass("error").addClass("info");$("#error-tahun").text("")
                }if(e.jumlah){$("#control-jumlah").removeClass("info").addClass("error");$("#error-jumlah").text(e.jumlah)
                }else{$("#control-jumlah").removeClass("error").addClass("info");$("#error-jumlah").text("")}
            }else{$(".modal").modal("hide");$(".modal").html("");notif("Data buku berhasil ditambah.","info");dataBuku()}}})
}

function modalRubahBuku(e){
    $(".modal").load(url_rubah_buku+"/"+e,function(){$(".modal").modal("show")})
}

function enterRubahBuku(e){
    if(e.which==13)rubahBuku()
}

function rubahBuku(){
    $(".form-rubah-buku").ajaxSubmit({success:function(e){
            if(e.status==""){
                if(e.cover){$("#control-cover").removeClass("info").addClass("error");$("#error-cover").text(e.cover)
                }else{$("#control-cover").removeClass("error").addClass("info");$("#error-cover").text("")
                }if(e.judul){$("#control-judul").removeClass("info").addClass("error");$("#error-judul").text(e.judul)
                }else{$("#control-judul").removeClass("error").addClass("info");$("#error-judul").text("")
                }if(e.penulis){$("#control-penulis").removeClass("info").addClass("error");$("#error-penulis").text(e.penulis)
                }else{$("#control-penulis").removeClass("error").addClass("info");$("#error-penulis").text("")
                }if(e.penerbit){$("#control-penerbit").removeClass("info").addClass("error");$("#error-penerbit").text(e.penerbit)
                }else{$("#control-penerbit").removeClass("error").addClass("info");$("#error-penerbit").text("")
                }if(e.tahun){$("#control-tahun").removeClass("info").addClass("error");$("#error-tahun").text(e.tahun)
                }else{$("#control-tahun").removeClass("error").addClass("info");$("#error-tahun").text("")
                }if(e.jumlah){$("#control-jumlah").removeClass("info").addClass("error");$("#error-jumlah").text(e.jumlah)
                }else{$("#control-jumlah").removeClass("error").addClass("info");$("#error-jumlah").text("")}
            }else{$(".modal").modal("hide");$(".modal").html("");notif("Data buku berhasil dirubah.","info");dataBuku()}}})
}

function modalHapusBuku(e){
    $(".modal").load(url_hapus_buku+"/"+e,function(){$(".modal").modal("show")})
}

function hapusBuku(e){
    $.post(url_hapus_buku+"/"+e,{_token:token},function(e){
        $(".modal").modal("hide");$(".modal").html("");notif("Data buku berhasil dihapus.","info");
        dataBuku()})
}

function modalHapusCeklisBuku(){
    var e=$(".id-buku:checked").serializeArray();
    if(e.length>0){$(".modal").load(url_hapus_ceklis_buku,function(){$(".modal").modal("show")})
    }else{
        notif("Ceklis data buku yang ingin dihapus.","error")}
}

function hapusCeklisBuku(){
    var e=$(".id-buku:checked").serializeArray();
    $.post(url_hapus_ceklis_buku,{id:e,_token:token},function(e){
        $(".modal").modal("hide");$(".modal").html(""); notif("Data buku berhasil dihapus.","info");dataBuku()})
}

function PDFBuku(){window.open(url_pdf_buku)}
function excelBuku(){window.open(url_excel_buku)}