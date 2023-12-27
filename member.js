function skillsMember() {
  const skills = document.querySelectorAll(".skill");
  skills.forEach((skill) => {
    skill.addEventListener("click", (event) => {
      event.currentTarget.classList.toggle("active");
    });
  });
}