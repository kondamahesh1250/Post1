let img = document.querySelector("#person-img");
let author = document.querySelector(".author");
let job = document.querySelector(".job");
let data = document.querySelector(".data");
let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");

let currentItem = 0;

const info = [
    {
      id: 1,
      name: "John Doe",
      job: "Software Engineer",
      img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1hbnxlbnwwfHx8fDE2ODMzNjQ5NzA&ixlib=rb-1.2.1&q=80&w=400",
      text: "Experienced in developing scalable web applications and adept at problem-solving.",
    },
    {
      id: 2,
      name: "Jane Smith",
      job: "UI/UX Designer",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdvbWFufGVufDB8fHx8MTY4MzM2NDk3MA&ixlib=rb-1.2.1&q=80&w=400",
      text: "Specializes in creating user-friendly interfaces with a strong aesthetic sense.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      job: "Data Scientist",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fG1hbGV8ZW58MHx8fHwxNjgzMzY0OTcw&ixlib=rb-1.2.1&q=80&w=400",
      text: "Expert in transforming data into actionable insights for strategic decisions.",
    },
    {
      id: 4,
      name: "Emily Davis",
      job: "Product Manager",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHdvbWFufGVufDB8fHx8MTY4MzM2NDk3MA&ixlib=rb-1.2.1&q=80&w=400",
      text: "Bridges the gap between stakeholders and development teams to deliver quality products.",
    },
    {
      id: 5,
      name: "David Wilson",
      job: "Marketing Specialist",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fG1hbGV8ZW58MHx8fHwxNjgzMzY0OTcw&ixlib=rb-1.2.1&q=80&w=400",
      text: "Develops and implements marketing strategies to enhance brand awareness.",
    },
    {
      id: 6,
      name: "Sophia Martinez",
      job: "Human Resources Manager",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fHdvbWFufGVufDB8fHx8MTY4MzM2NDk3MA&ixlib=rb-1.2.1&q=80&w=400",
      text: "Oversees recruitment and employee relations to foster a positive work environment.",
    },
    {
      id: 7,
      name: "James Brown",
      job: "Financial Analyst",
      img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fG1hbGV8ZW58MHx8fHwxNjgzMzY0OTcw&ixlib=rb-1.2.1&q=80&w=400",
      text: "Analyzes financial data to guide investment decisions and business planning.",
    },
    {
      id: 8,
      name: "Olivia Garcia",
      job: "Operations Manager",
      img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fHdvbWFufGVufDB8fHx8MTY4MzM2NDk3MA&ixlib=rb-1.2.1&q=80&w=400",
      text: "Ensures efficient business operations through strategic planning and resource management.",
    },
    {
      id: 9,
      name: "William Lee",
      job: "Legal Advisor",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfG1hbGV8ZW58MHx8fHwxNjgzMzY0OTcw&ixlib=rb-1.2.1&q=80&w=400",
      text: "Provides legal counsel to ensure company compliance with laws and regulations.",
    },
    {
      id: 10,
      name: "Ava Thompson",
      job: "Public Relations Specialist",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHdvbWFufGVufDB8fHx8MTY4MzM2NDk3MA&ixlib=rb-1.2.1&q=80&w=400",
      text: "Manages public image and communications to maintain a favorable company reputation.",
    },
  ];
  



// Load initial data
window.addEventListener("DOMContentLoaded", () => {
    loadData(currentItem);
    updateButtonState();
});

// Update slider content
function loadData(index) {
    const item = info[index];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    data.textContent = item.text;
}

// Update button states based on current index
function updateButtonState() {
    prevBtn.disabled = currentItem === 0;
    nextBtn.disabled = currentItem === info.length - 1;
}

// Show previous item
prevBtn.addEventListener("click", () => {
    currentItem--;
    loadData(currentItem);
    updateButtonState();
    resetAutoSlide();
});

// Show next item
nextBtn.addEventListener("click", () => {
    currentItem++;
    loadData(currentItem);
    updateButtonState();
    resetAutoSlide();
});

// Auto-slide functionality
function slide() {
    currentItem = (currentItem + 1) % info.length;
    loadData(currentItem);
    updateButtonState();
}

let autoSlideInterval = setInterval(slide, 3000);

// Reset auto-slide on interaction
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(slide, 3000);
}
