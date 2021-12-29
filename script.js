$(document).ready(function () {
    $.ajax({
      type: "GET",
      url: "https://www.feriadosapp.com/api/holidays.json",
      success: function (data) {
        data.data.forEach((date) => {
          $("#feriados").append(
            `<tbody>
                <tr>
                    <td>${date.date}</td>
                    <td>${date.title}</td>
                    <td>${date.extra}</td>
                    <td>${date.law}</td>
                </tr>
              </tbody>`
          );
        });
      }
    });
  });