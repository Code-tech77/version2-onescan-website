// Blog post data (should match blog.js)
const blogPosts = [
    {
        title: 'Why Secure QR Codes Matter',
        img: 'images/blog1.jpg',
        summary: 'Learn about the risks of insecure QR codes, real world attack examples, and how to protect yourself and your users.',
        author: 'OneScan Team',
        date: '2024-06-01',
        content: `
            <h2>Introduction</h2>
            <p>QR codes are everywhere, but not all are created equal. Insecure QR codes can be tampered with, leading to phishing, malware, or data theft. Attackers can overlay malicious codes on printed materials or compromise digital displays. Always verify the source and use apps like OneScan that guarantee one time, secure usage.</p>
            <blockquote>"A single insecure QR code can compromise an entire workflow. Security must come first."</blockquote>
            <h3>Common QR Code Threats</h3>
            <ul>
                <li><b>Phishing:</b> Fake QR codes can redirect to phishing sites.</li>
                <li><b>Replay Attacks:</b> Reusing a code can expose sensitive info.</li>
                <li><b>Data Leaks:</b> Unsecured codes may leak private data.</li>
            </ul>
            <div class='callout callout-warning'><b>Tip:</b> Always use a trusted QR code app and check the destination before scanning.</div>
            <h3>How OneScan Solves This</h3>
            <p>OneScan's one time codes eliminate these risks by expiring after a single scan. This ensures your data is never reused or exposed to replay attacks.</p>
            
            <h3>Real-World Example</h3>
            <p>In 2023, a major event organizer discovered that reused QR codes led to ticket fraud. Switching to OneScan's one time codes eliminated the problem overnight.</p>
            <h3>Conclusion</h3>
            <p>Security is not optional. Choose QR solutions that put your privacy and safety first.</p>
        `
    },
    {
        title: 'The Power of One-Time QR Codes',
        img: 'images/blog2.jpg',
        summary: 'Discover how single use QR codes prevent phishing, replay attacks, and data leaks in modern digital workflows.',
        author: 'OneScan Team',
        date: '2024-06-03',
        content: `
            <h2>Why One-Time Codes?</h2>
            <p>One time QR codes are the gold standard for secure sharing. They ensure that even if a code is intercepted, it cannot be reused. This is vital for sharing tickets, credentials, or private links.</p>
            <div class='callout callout-info'><b>Did you know?</b> Over 60% of QR code attacks involve code reuse or replay.</div>
            <h3>Benefits</h3>
            <ul>
                <li>Prevents code reuse and replay attacks</li>
                <li>Ideal for event tickets, secure logins, and confidential info</li>
                <li>Peace of mind for both sender and receiver</li>
            </ul>
            
            <h3>How OneScan Makes It Easy</h3>
            <p>OneScan automates this process, making secure sharing effortless for everyone. With a single tap, you generate a code that is instantly invalidated after use, protecting your data from interception.</p>
            <h3>Case Study</h3>
            <p>Businesses using OneScan have reported a 90% reduction in QR related security incidents after switching to one time codes.</p>
        `
    },
    {
        title: 'Best Practices for QR Code Security',
        img: 'images/blog3.jpg',
        summary: 'Tips for generating, sharing, and scanning QR codes safely at work, at home, and on the go.',
        author: 'OneScan Team',
        date: '2024-06-05',
        content: `
            <h2>Stay Safe with QR Codes</h2>
            <ol>
                <li>Always use HTTPS links in your QR codes.</li>
                <li>Never scan codes from unknown sources.</li>
                <li>Use apps that support one time or expiring codes.</li>
                <li>Regularly update your QR code apps for the latest security.</li>
            </ol>
            <div class='callout callout-success'><b>Pro Tip:</b> OneScan is designed with these best practices at its core.</div>
            
            <h3>Common Mistakes</h3>
            <ul>
                <li>Embedding sensitive data in plain text QR codes</li>
                <li>Sharing codes over insecure channels</li>
                <li>Not verifying the destination URL</li>
            </ul>
            <h3>Conclusion</h3>
            <p>By following these best practices and using OneScan, you can ensure your QR code experience is both safe and seamless.</p>
        `
    },
    {
        title: 'How Hackers Exploit QR Codes',
        img: 'images/blog4.jpg',
        summary: 'A deep dive into real world QR code attacks, from fake parking meters to malicious restaurant menus.',
        author: 'OneScan Team',
        date: '2024-06-07',
        content: `<p>Hackers have used QR codes to steal credentials, install malware, and trick users into revealing sensitive data. For example, fake QR stickers on parking meters can redirect to phishing sites. Always check for tampering and use trusted apps like OneScan to scan codes.</p>`
    },
    {
        title: 'The Future of QR Code Authentication',
        img: 'images/blog5.jpg',
        summary: 'Explore how QR codes are revolutionizing secure logins, two-factor authentication, and passwordless access.',
        author: 'OneScan Team',
        date: '2024-06-09',
        content: `<p>QR codes are now used for secure logins and 2FA. One time codes generated by apps like OneScan can authenticate users without passwords, reducing the risk of credential theft. The future is passwordless, and QR codes are leading the way.</p>`
    },
    {
        title: 'QR Codes and Privacy: What You Need to Know',
        img: 'images/blog6.jpg',
        summary: 'Understand the privacy implications of QR codes and how to keep your data safe when scanning or sharing.',
        author: 'OneScan Team',
        date: '2024-06-11',
        content: `<p>QR codes can encode personal data, so privacy is crucial. Only share codes with trusted parties and avoid embedding sensitive info in plain text. OneScan encrypts your data and ensures it's only accessible once, protecting your privacy.</p>`
    },
    {
        title: 'How OneScan Works: Under the Hood',
        img: 'images/blog7.jpg',
        summary: 'A technical look at how OneScan generates, secures, and invalidates one time QR codes for maximum safety.',
        author: 'OneScan Team',
        date: '2024-06-13',
        content: `<p>OneScan uses backend validation and cryptographic tokens to ensure each QR code is valid for a single scan. After use, the code is instantly invalidated, preventing reuse. This approach combines usability with enterprise grade security.</p>`
    },
    {
        title: 'Common QR Code Myths Debunked',
        img: 'images/blog9.jpg',
        summary: 'Are QR codes really unsafe? Can anyone read your data? We separate fact from fiction.',
        author: 'OneScan Team',
        date: '2024-06-15',
        content: `<ul><li><b>Myth:</b> All QR codes are dangerous. <b>Fact:</b> Only insecure or reused codes pose risks.</li><li><b>Myth:</b> QR codes always reveal your info. <b>Fact:</b> OneScan encrypts and protects your data.</li></ul>`
    },
    {
        title: 'How to Spot a Malicious QR Code',
        img: 'images/blog10.jpg',
        summary: 'Practical tips for identifying tampered or fake QR codes in public and online.',
        author: 'OneScan Team',
        date: '2024-06-17',
        content: `<p>Look for signs of tampering, such as stickers over original codes. Use apps that preview the link before you open. OneScan always shows you the destination before you proceed.</p>`
    },
    {
        title: 'The Evolution of QR Code Technology',
        img: 'images/blog11.jpg',
        summary: 'From inventory tracking to secure payments, discover how QR codes have evolved over the years.',
        author: 'OneScan Team',
        date: '2024-06-19',
        content: `<p>QR codes started in manufacturing but now power payments, authentication, and more. Security has become a top priority, and OneScan is at the forefront of this evolution.</p>`
    },
    {
        title: 'Building Trust with Secure QR Codes',
        img: 'images/blog12.jpg',
        summary: 'How businesses can use secure QR codes to build customer trust and loyalty.',
        author: 'OneScan Team',
        date: '2024-06-21',
        content: `<p>Customers are wary of QR codes due to security concerns. By using OneScan's one time codes, businesses can reassure users and build lasting trust.</p>`
    },
    {
        title: 'QR Codes for Secure Payments',
        img: 'images/blog13.jpg',
        summary: 'How one time QR codes are making mobile payments safer and more reliable.',
        author: 'OneScan Team',
        date: '2024-06-23',
        content: `<p>Payment fraud is a growing problem. One time QR codes ensure each transaction is unique and can't be reused, making mobile payments safer for everyone.</p>`
    },
    {
        title: 'What Makes a QR Code Truly Secure?',
        img: 'images/blog14.jpg',
        summary: 'A checklist for evaluating the security of any QR code solution you use.',
        author: 'OneScan Team',
        date: '2024-06-25',
        content: `<ul><li>One time use</li><li>Backend validation</li><li>Encrypted data</li><li>Transparent destination preview</li></ul><p>OneScan checks all these boxes and more.</p>`
    },
    {
        title: 'The Role of Design in QR Code Security',
        img: 'images/blog15.jpg',
        summary: 'How thoughtful design and UX can make QR code security accessible to everyone.',
        author: 'OneScan Team',
        date: '2024-06-27',
        content: `<p>Security shouldn't come at the cost of usability. OneScan's design makes secure QR codes easy and intuitive, so everyone can stay safe without hassle.</p>`
    }
];

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener('DOMContentLoaded', () => {
    const id = parseInt(getQueryParam('id'), 10);
    const post = blogPosts[id];
    const titleEl = document.getElementById('post-title');
    const summaryEl = document.getElementById('post-summary');
    const imgEl = document.getElementById('post-img');
    const contentEl = document.getElementById('post-content');

    // Add author and date at the top
    let metaBar = document.getElementById('post-meta');
    if (!metaBar) {
        metaBar = document.createElement('div');
        metaBar.id = 'post-meta';
        metaBar.className = 'blog-post-meta';
        titleEl.parentNode.insertBefore(metaBar, summaryEl);
    }

    if (!post) {
        titleEl.textContent = 'Blog Post Not Found';
        summaryEl.textContent = '';
        imgEl.style.display = 'none';
        contentEl.innerHTML = '<p style="color:var(--secondary-color);font-size:1.3rem;">Sorry, the blog post you are looking for does not exist.</p>';
        metaBar.innerHTML = '';
        return;
    }

    titleEl.textContent = post.title.replace(/-/g, '');
    summaryEl.textContent = post.summary.replace(/-/g, '');
    imgEl.src = post.img;
    imgEl.alt = post.title.replace(/-/g, '');
    contentEl.innerHTML = post.content.replace(/-/g, '');
    metaBar.innerHTML = `<span class="blog-meta-author"><i class='fas fa-user'></i> ${post.author}</span> · <span class="blog-meta-date"><i class='fas fa-calendar-alt'></i> ${post.date}</span>`;

    // Share button logic
    const copyBtn = document.getElementById('copy-link-btn');
    const shareUrl = window.location.href;
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(shareUrl).then(() => {
                copyBtn.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class=\'fas fa-link\'></i>';
                }, 1200);
            });
        });
    }

    // Animate in
    setTimeout(() => {
        titleEl.classList.add('visible');
        summaryEl.classList.add('visible');
        metaBar.classList.add('visible');
    }, 100);

    // Render related posts at the bottom
    const relatedContainer = document.getElementById('related-posts');
    if (relatedContainer) {
        const related = blogPosts
            .map((p, i) => ({...p, idx: i}))
            .filter(p => p.idx !== id)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
        relatedContainer.innerHTML = related.map(r => `
            <a class='related-post-card' href='blog-post.html?id=${r.idx}'>
                <img src='${r.img}' alt='${r.title}' class='related-post-img'>
                <div class='related-post-title'>${r.title}</div>
                <div class='related-post-summary'>${r.summary}</div>
                <div class='related-post-meta'>By ${r.author} · ${r.date}</div>
            </a>
        `).join('');
    }
}); 