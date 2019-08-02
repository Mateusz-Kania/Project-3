import $ from "jquery";

export default function(){
    return $.ajax({
        url: "./config.json",
    }).done(function(data) {
        return data;
    });
}