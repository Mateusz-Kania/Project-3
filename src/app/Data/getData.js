import $ from "jquery";

export default function(url){

    return $.ajax({
        url: url,
    }).done(function(data) {
        return data;
    });
}