$(document).ready(function() {
  $("#btn-link-bank").click(function() {
    var message = $("textarea#request").val();
    var request = $.parseJSON(message);
    console.log(request);

    var form_data = new FormData();

    for (var key in request) {
      form_data.append(key, request[key]);
    }

    $.ajax({
      type: "POST",
      url: "https://cardtest.sacombank.com.vn:9448/checkout/stbCheckout",
      processData: false,
      contentType: false,
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
      },
      data: form_data,
      success: function(result) {
        console.log(result);
      },
      error: function(err) {
        console.log(err);
      }
    });
  });
});
