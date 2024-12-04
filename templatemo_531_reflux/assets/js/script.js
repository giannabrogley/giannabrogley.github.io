const quotes = [
    "“Gianna has shown that she is technically curious and thorough, seeking to understand concepts in 1:1s and reaching out to experts to learn more about how their expertise may apply to her projects.”",
    "“Gianna has demonstrated a consistent work ethic and is very flexible when projects evolve. She shows a desire to learn, grow her own personal and professional skills, and work together on teams.”",
    "“Gianna has demonstrated her ability to be autonomous, progressing her projects independently. She has shown enthusiasm and the ability to juggle multiple and unrelated priorities.”",
    "“Gianna has a can-do attitude and has a willingness to learn. She has demonstrated her ability to make connections across different data sets and observations.”",
    "“Gianna’s work plan was challenging, spanning 3 different categories, 3 different coaches, and 2 different functions. She demonstrated discipline and excellence in execution, delivering and exceeding on her established success criteria.”",
    "“Throughout her internship, Gianna proactively developed an action plan, outlining her goals and deliverables. She often worked with her managers to optimize her learning approach to ensure she progressed her projects.”",
    "“Gianna consistently demonstrated effective communication skills across multiple P&G stakeholders. In her short time here, she has developed strong personal relationships and often received positive feedback on her collaboration.”"
  ];
  
  let currentQuoteIndex = 0;
  
  function updateQuote() {
    document.getElementById("quote").textContent = quotes[currentQuoteIndex];
  }
  
  function prevQuote() {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    updateQuote();
  }
  
  function nextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    updateQuote();
  }
  
  // Initialize the first quote
  updateQuote();
  