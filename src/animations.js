import $ from 'jquery';

export function initializeAnimations() {
  $(function () {
    var flag = 1;

    // Save the original positions of the elements
    const originalPositions = {};
    $('.one, .two, .three, .four, .five').each(function () {
      const $this = $(this);
      originalPositions[$this.attr('class')] = {
        top: $this.css('top'),
        left: $this.css('left'),
      };
    });

    $('.share').on('click', function () {
      if (flag === 0) {
        // Remove the 'left' style when opening
    

        // Animate to their original positions when opening
        $(this).siblings('.one').animate(
          {
            top: originalPositions['one'].top,
            left: originalPositions['one'].left,
          },
          200
        );

        $(this).siblings('.two').delay(100).animate(
          {
            top: originalPositions['two'].top,
            left: originalPositions['two'].left,
          },
          200
        );

        $(this).siblings('.three').delay(200).animate(
          {
            top: originalPositions['three'].top,
            left: originalPositions['three'].left,
          },
          200
        );

        $(this).siblings('.four').delay(300).animate(
          {
            top: originalPositions['four'].top,
            left: originalPositions['four'].left,
          },
          200
        );

        $(this).siblings('.five').delay(400).animate(
          {
            top: originalPositions['five'].top,
            left: originalPositions['five'].left,
          },
          200
        );

        $('.one i, .two i, .three i, .four i, .five i').delay(500).fadeIn(200);
        flag = 1;

      } else {
        // Get the center position of the `.share` button
        const shareOffset = $(this).offset();
        const shareCenter = {
          top: shareOffset.top + $(this).outerHeight() * 0,
          left: shareOffset.left + $(this).outerWidth() / 2,
        };

        // Animate to the center of the `.share` button when closing
        $('.one, .two, .three, .four, .five').animate(
          {
            top: shareCenter.top,
            left: shareCenter.left,
          },
          200
        );

        $('.one i, .two i, .three i, .four i, .five i').delay(500).fadeOut(200);
        flag = 0;
      }
    });
  });
}