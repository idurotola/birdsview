const alerts = [
  {
    title: "App #1",
    type: "ios",
    frequency: ["Immediately", "Daily digest", "Weekly digest"],
    integrations: {
      slack: true,
      email: true
    },
    tags: ["1", "2", "3"]
  },
  {
    title: "App with a really long app name",
    type: "ios",
    frequency: ["Immediately"],
    integrations: {
      slack: true,
      email: false
    },
    tags: []
  },
  {
    title: "Android App",
    type: "android",
    frequency: ["Immediately", "Daily digest", "Weekly digest"],
    integrations: {
      slack: true,
      email: true
    },
    tags: []
  }
];

export default alerts;
