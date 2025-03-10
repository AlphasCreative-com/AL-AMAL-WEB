(function ($) {
  "use strict";
  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 2000);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });

  function startCounter(counter) {
    const target = +counter.getAttribute("data-target");
    const duration = 2000; // Animation duration in milliseconds
    const increment = target / (duration / 16); // Increment per frame (60fps)

    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const featureItems = document.querySelectorAll(".feature-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  featureItems.forEach((item) => {
    observer.observe(item);
  });
});





// Function to animate numbers
function animateNumber(element, targetNumber, duration) {
  let startTime = null;

  function updateNumber(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const increment = Math.floor((targetNumber / duration) * progress);

    if (increment < targetNumber) {
      element.textContent = increment;
      requestAnimationFrame(updateNumber);
    } else {
      element.textContent = targetNumber;
    }
  }

  requestAnimationFrame(updateNumber);
}

// Animate the numbers
const projectsElement = document.getElementById("projects");
const awardsElement = document.getElementById("awards");
const employeesElement = document.getElementById("employees")

animateNumber(projectsElement, 50, 2000); // 250 projects, 2 seconds duration
animateNumber(awardsElement, 20, 2000); // 50 awards, 2 seconds duration
animateNumber(employeesElement, 10, 2000); // 50 awards, 2 seconds duration




