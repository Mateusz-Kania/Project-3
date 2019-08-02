import $ from "jquery";

export default function(){
    return $.ajax({
        url: "./data.json",
    }).done(function(data) {
        return data;
    });
}