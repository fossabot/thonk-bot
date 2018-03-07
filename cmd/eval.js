const request = require('superagent');
module.exports = {
  name: 'eval',
  info: `executes javascript code \nWell, why you\'re here? You can\'t use this command anyway, get rekt ayy lmao. \nThere\'s no matter how long the description of a command is, so let\'s insert a random paragraph, shall we? \n 段落簡稱段，是文章中最基本的單位。從內容上說，它具有一個相對完整的意思；在文章中，段具有換行的標。段是由句子或句群組成的，在文章中用於體現作者的思路發展或全篇文章的層次。有的段落只有一個句子，稱為獨句段，獨句段一般是文章的開頭段、結尾段、過渡段強調段等特殊的段落。多數段落包括不止一個句子或句群，叫多句段。

  在文章中相對而言又有邏輯段和自然段之分。自然段是指「換行又不能表達的一個較完整意思的語言單位」叫自然段，它著重於文字表達的需要。邏輯段是由一個或以上的意思相關的自然段組成，它著重於文章思想內容的表達。
  
  中文每段開首要留空（首行縮排）兩個字；日文每段開頭留出一個字；英文寫作時據MLA格式手冊推薦留出1/2英寸或5個字母。 \nLet\'s have an another one! \nNode.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts.

  Though .js is the conventional filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).[6]
  
  The Node.js distributed development project, governed by the Node.js Foundation,[7] is facilitated by the Linux Foundation's Collaborative Projects program.[8]
  
  Corporate users of Node.js software include GoDaddy,[9] Groupon,[10] IBM,[11] LinkedIn,[12][13] Microsoft,[14][15] Netflix,[16] PayPal,[17][18] Rakuten, SAP, Tuenti,[19] Voxer,[20] Walmart,[21] and Yahoo!.[22] \nAll of these from wikipedia ayy lmao \n`,
  usage: '<code>',
  args: true,
  ownerOnly: true,
  async execute(message, args) {
    const clean = text => {
      if (typeof text === 'string')
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
      else
          return text;
    };
    try {
      const code = args.join(' ');
      let evaled = eval(code);

      if (typeof evaled !== 'string')
        evaled = require('util').inspect(evaled);
      if (clean(evaled).length > 2000) {
        const { body } = await request
        .post('https://hastebin.com/documents')
        .send(clean(evaled));

        message.channel.send(`Since the result is over 2000 letters long, I have posted the result to hastebin! https://hastebin.com/${body.key}.js`);
        return;
      }
      message.channel.send(clean(evaled), { code:'xl' });
    } catch (err) {
      message.channel.send(`\<:redtick:412529964945113100> **Error!** \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  },
};