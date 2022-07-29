$(document).ready(() => {
    $(".next").on("click", () => {
      Right();
      $(".next").prop("disabled", true);
    });
    $(".prev").on("click", () => {
      Left();
      $(".prev").prop("disabled", true);
  
    });
  
    const Right = () => {
      let topSlideWidth = $(".top li:last-child ").width();
      let bottomSlideWidth = $(".bottom li:last-child").width();
  
  
      $(".top li:last-child").animate(
        {
          width: -topSlideWidth,
        },
        300,
        () => {
          $(".top li:last-child").prependTo(".top .images");
        }
      );
  
      $(".top li:last-child ").animate(
        {
          width: topSlideWidth,
        },
        300
      );
  

      $(".bottom li:last-child").animate(
        {
          width: -bottomSlideWidth,
        },
        300,
        () => {
          $(".bottom li:last-child").prependTo(".bottom .images");
        }
      );
      $(".bottom li:last-child").animate(
        {
          width: bottomSlideWidth,
        },
        300,
        () => {
          $(".next").prop("disabled", false);
        }
      );
    };
  });
  
  const Left = () => {
    
    $(".top li:first-child").hide(600, () => {
      $(".top li:first-child").appendTo(".top .images").fadeIn(600);
    });
  
    $(".bottom li:first-child").hide(600, () => {
      $(".bottom li:first-child").appendTo(".bottom .images").fadeIn(600);
      $(".prev").prop("disabled", false);
    });
};
  