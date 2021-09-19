// Time
const time = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' });
document.getElementById('time').innerHTML = time();
setInterval(() => document.getElementById('time').innerHTML = time(), 1000);

// Greeting
const greeting = () => {
  const hour = (new Date()).getHours();
  if (hour >= 5 & hour < 12) return 'Good Morning ☕️';
  if (hour >= 12 & hour < 18) return 'Good Afternoon ☀️';
  if (hour >= 18 & hour < 22) return 'Good Evening 🌃';
  if (hour >= 22 | hour < 5) return 'Goodnight 🌙';
}
document.getElementById('greeting').innerHTML = greeting();
setInterval(() => document.getElementById('greeting').innerHTML = greeting(), 1000);
