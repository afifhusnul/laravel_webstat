function modalRubahFoto(){
    $(".modal").load(url_rubah_foto,function(){
        $(".modal").modal("show")})
}

function rubahFoto(){
    $(".form-rubah-foto").ajaxSubmit({success:function(e){
            if(e.foto){$("#control-foto").removeClass("info").addClass("error");$("#error-foto").text(e.foto)
            }else{$(".modal").modal("hide");notif("Foto anda berhasil dirubah.","info")}}})
}
function modalRubahNama(){
    $(".modal").load(url_rubah_nama,function(){$(".modal").modal("show")})
}

function enterRubahNama(e){if(e.which==13)rubahNama()}
function rubahNama(){
    var e=$("#nama").val().trim();
    $.post(url_rubah_nama,{nama:e,_token:token},function(t)
    { if(t.nama){$("#control-nama").removeClass("info").addClass("error");$("#error-nama").text(t.nama)
        }else{$(".modal").modal("hide");$(".modal").html("");$(".user").text(e);notif("Nama anda berhasil dirubah.","info")}})
}

function modalRubahSekolah(e){
    $(".modal").load(url_rubah_sekolah,function(){$(".modal").modal("show")})
}
function enterRubahSekolah(e){e.preventDefault();if(e.which==13)rubahSekolah()}

function rubahSekolah(){
    $(".form-rubah-sekolah").ajaxSubmit({success:function(e){
            if(e.status==""){if(e.logo){$("#control-logo").removeClass("info").addClass("error");$("#error-logo").text(e.logo)
                }else{$("#control-logo").removeClass("error").addClass("info");$("#error-logo").text("")}if(e.nama){$("#control-nama").removeClass("info").addClass("error");$("#error-nama").text(e.nama)
                }else{$("#control-nama").removeClass("error").addClass("info")}if(e.alamat){$("#control-alamat").removeClass("info").addClass("error");$("#error-alamat").text(e.alamat)
                }else{$("#control-alamat").removeClass("error").addClass("info")}
            }else{$(".modal").modal("hide");$(".modal").html("");notif("Data sekolah berhasil dirubah.","info")}}})
}

function modalRubahUsername(){$(".modal").load(url_rubah_username,function(){$(".modal").modal("show")})}
function enterRubahUsername(e){if(e.which==13)rubahUsername()}

function rubahUsername(){
    var e=$("#username_sekarang").val().trim();
    var t=$("#username_baru").val().trim();
    var n=$("#konfirmasi_username").val().trim();
    $.post(url_rubah_username,{username_sekarang:e,username_baru:t,konfirmasi_username:n,_token:token},function(e){
        if(e.status==""){if(e.username_sekarang){$("#control-username-sekarang").removeClass("info").addClass("error");$("#error-username-sekarang").text(e.username_sekarang)
            }else{$("#control-username-sekarang").removeClass("error").addClass("info");$("#error-username-sekarang").text("")
            }if(e.username_baru){$("#control-username-baru").removeClass("info").addClass("error");$("#error-username-baru").text(e.username_baru)
            }else{$("#control-username-baru").removeClass("error").addClass("info");$("#error-username-baru").text("")
            }if(e.konfirmasi_username){$("#control-konfirmasi-username").removeClass("info").addClass("error");$("#error-konfirmasi-username").text(e.konfirmasi_username)
            }else{$("#control-konfirmasi-username").removeClass("error").addClass("info");$("#error-konfirmasi-username").text("")}}else{$(".modal").modal("hide");$(".modal").html("");notif("Username anda berhasil dirubah.","info")}})
}

function modalRubahPassword(){$(".modal").load(url_rubah_password,function(){$(".modal").modal("show")})}

function enterRubahPassword(e){if(e.which==13)rubahPassword()}
function rubahPassword(){
    var e=$("#password_sekarang").val().trim();
    var t=$("#password_baru").val().trim();
    var n=$("#konfirmasi_password").val().trim();$.post(url_rubah_password,{password_sekarang:e,password_baru:t,konfirmasi_password:n,_token:token},function(e){if(e.status==""){if(e.password_sekarang){$("#control-password-sekarang").removeClass("info").addClass("error");$("#error-password-sekarang").text(e.password_sekarang)}else{$("#control-password-sekarang").removeClass("error").addClass("info");$("#error-password-sekarang").text("")}if(e.password_baru){$("#control-password-baru").removeClass("info").addClass("error");$("#error-password-baru").text(e.password_baru)}else{$("#control-password-baru").removeClass("error").addClass("info");$("#error-password-baru").text("")}if(e.konfirmasi_password){$("#error-konfirmasi-password").text(e.konfirmasi_password)}else{$("#error-konfirmasi-password").text("")}$(".modal").find(".control-group").addClass("error");$(".modal").find("input").val("")}else{$(".modal").modal("hide");$(".modal").html("");notif("Password anda berhasil dirubah.","info")}})}

function logout(){$.get(url_logout,function(){$(location).prop("href",url_login)})}

function link(e){$(".navbar-inner").find("li").removeClass("active");$(e).addClass("active")}
function notif(e,t){Messenger().post({message:e,type:t,showCloseButton:true})}
function ceklis(e){$(".table").find(":checkbox").prop("checked",$(e).prop("checked"))}
function paginasi(e){$(".konten").load($(e).data("target"),function(){properti()})}
function properti(){
    $(".tip").tooltip();$(".tanggal").datepicker({format:"dd-mm-yyyy",autoclose:true,language:"id"});
    $(".type").typeahead({items:5});$(".pagination a").click(function(){paginasi(this)})
}

$(function(){Messenger({maxMessages:1})});
$(".modal").on("shown",function(){$(".input-focus").focus()})