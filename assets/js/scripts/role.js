function dataRole(){
    $("title").text("Data Role");
    link("#link-role");
    $(".container").load(url_data_role,function(){ properti()})
}

function urutSiswa(){
    var e=$("#kolom-siswa").find(":selected").val();
    var t=$("#tipe-siswa").find(":selected").val();$(".konten").load(url_urut_siswa+"/"+e+"/"+t,function(){properti()})
}

function cariSiswa(){
    var e=$("#cari-siswa").val().trim();
    if(e==""){ 
        notif("Inputan nama harus diisi","error")
    } else {
        $(".konten").load(url_cari_siswa+"/"+encodeURIComponent(e),function(){properti()})
    }
}

function modalLihatSiswa(e){
    $(".modal").load(url_foto_siswa+"/"+e,function(){$(".modal").modal("show")})
}

function modalTambahSiswa(){
    $(".modal").load(url_tambah_siswa,
    function(){
        $(".modal").modal("show")})
}


function enterTambahSiswa(e){
    if(e.which==13)tambahSiswa()
}

function tambahSiswa(){
    $(".form-tambah-siswa").ajaxSubmit({
        success:function(e){
            if(e.status==""){
                if(e.foto){
                    $("#control-foto").removeClass("info").addClass("error");$("#error-foto").text(e.foto)
                }else{
                    $("#control-foto").removeClass("error").addClass("info");$("#error-foto").text("")
                }if(e.nis){$("#control-nis").removeClass("info").addClass("error");$("#error-nis").text(e.nis)
                }else{
                    $("#control-nis").removeClass("error").addClass("info");$("#error-nis").text("")
                }if(e.nama){$("#control-nama").removeClass("info").addClass("error");$("#error-nama").text(e.nama)
                }else{$("#control-nama").removeClass("error").addClass("info");$("#error-nama").text("")
                }if(e.kelas){$("#control-kelas").removeClass("info").addClass("error");$("#error-kelas").text(e.kelas)
                }else{$("#control-kelas").removeClass("error").addClass("info");$("#error-kelas").text("")
                }if(e.telp){$("#control-telp").removeClass("info").addClass("error");$("#error-telp").text(e.telp)
                }else{$("#control-telp").removeClass("error").addClass("info");$("#error-telp").text("")
                }if(e.alamat){$("#control-alamat").removeClass("info").addClass("error");$("#error-alamat").text(e.alamat)
                }else{$("#control-alamat").removeClass("error").addClass("info");$("#error-alamat").text("")
                }
            }else{$(".modal").modal("hide");$(".modal").html("");notif("Data siswa berhasil ditambah.","info");dataSiswa()}}})
}

function modalEditRole(e){
    $(".modal").load(url_edit_role+"/"+e,function(){$(".modal").modal("show")})
}

function enterEditRole(e){
    if(e.which==13)editRole()
}

function editRole(){ 
    $(".form-edit-role").ajaxSubmit({ 
        success:function(e){
            if(e.status==""){if(e.foto){$("#control-foto").removeClass("info").addClass("error");$("#error-foto").text(e.foto)
                } else {
                    $("#control-foto").removeClass("error").addClass("info");$("#error-foto").text("")
                }
                if(e.nis){
                    $("#control-nis").removeClass("info").addClass("error");$("#error-nis").text(e.nis)
                } else {
                    $("#control-nis").removeClass("error").addClass("info");$("#error-nis").text("")
                }
                if(e.nama){$("#control-nama").removeClass("info").addClass("error");$("#error-nama").text(e.nama)
                } else {
                    $("#control-nama").removeClass("error").addClass("info");$("#error-nama").text("")
                }
                if(e.kelas){$("#control-kelas").removeClass("info").addClass("error");$("#error-kelas").text(e.kelas)
                } else {
                    $("#control-kelas").removeClass("error").addClass("info");$("#error-kelas").text("")
                }
                if(e.telp){$("#control-telp").removeClass("info").addClass("error");$("#error-telp").text(e.telp)
                } else {
                    $("#control-telp").removeClass("error").addClass("info");$("#error-telp").text("")
                }
                if(e.alamat){$("#control-alamat").removeClass("info").addClass("error");$("#error-alamat").text(e.alamat)
                } else {
                    $("#control-alamat").removeClass("error").addClass("info");$("#error-alamat").text("")
                }
            } else {
                $(".modal").modal("hide");
                $(".modal").html("");notif("Update role success.","info");
                dataRole()
            }}})
}

function modalHapusRole(e){
    $(".modal").load(url_hapus_role+"/"+e,function(){$(".modal").modal("show")})    
}

function hapusRole(e){ 
    $.post(url_hapus_role+"/"+e,{_token:token},function(e){
        $(".modal").modal("hide");
        $(".modal").html("");
        dataRole();
        notif("Delete Role success.","info")})
}

function modalHapusCeklisSiswa(){
    var e=$(".id-siswa:checked").serializeArray();
    if(e.length>0){
        $(".modal").load(url_hapus_ceklis_siswa,function(){$(".modal").modal("show")})
    } else {
        notif("Ceklis data siswa yang ingin dihapus.","error")}
}

function hapusCeklisSiswa(){
    var e=$(".id-siswa:checked").serializeArray();
    $.post(url_hapus_ceklis_siswa,{id:e,_token:token},function(e){$(".modal").modal("hide");$(".modal").html("");
        notif("Data siswa berhasil dihapus.","info");dataSiswa()})
}

function modalQRCode(e){
    $(".modal").load(url_qrcode+"/"+e,function(){$(".modal").modal("show")})
}

function unduhQRCode(e){
    window.open(url_unduh_qrcode+"/"+e)
}

function modalAnggota(e){
    $(".modal").load(url_anggota+"/"+e,function(){$(".modal").modal("show")})
}

function unduhAnggota(e){window.open(url_unduh_anggota+"/"+e)}

function PDFRole(){window.open(url_pdf_siswa)}
function excelRole(){window.open(url_excel_siswa)}