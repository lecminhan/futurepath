
"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ChevronRight, Monitor, Smartphone, Tablet, Heart } from "lucide-react"
import NavBar from "../components/Navbar"
import "../styles/discord-community.css"

export default function DiscordCommunityPage() {
    const [isVisible, setIsVisible] = useState({
        hero: false,
        whatIsDiscord: false,
        careerLauncher: false,
        careerQuestion: false,
        studyTips: false,
        steps: false,
        conversations: false,
        testimonials: false,
        faq: false,
        cta: false,
    })

    const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

    // Placeholder image URL
    const placeholderImage =
        "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg"

    useEffect(() => {
        // Animate sections as they come into view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({
                            ...prev,
                            [entry.target.id]: true,
                        }))
                    }
                })
            },
            { threshold: 0.1 },
        )

        const sections = document.querySelectorAll(".animate-section")
        sections.forEach((section) => {
            observer.observe(section)
        })

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section)
            })
        }
    }, [])

    const toggleFaq = (index: number) => {
        setExpandedFaq(expandedFaq === index ? null : index)
    }

    const faqItems = [
        {
            question: "What is Discord?",
            answer:
                "Discord is an online social networking platform featuring thousands of servers focused on different areas of interest. Our CareerExplorer Discord server is focused on (you guessed it) careers.",
        },
        {
            question: "Is joining the CareerExplorer Discord community free?",
            answer:
                "Yes, joining our Discord community is completely free. You just need to create a Discord account if you don't already have one.",
        },
        {
            question: "How is this different from LinkedIn or other social networks?",
            answer:
                "Unlike LinkedIn, our Discord community is focused specifically on career exploration and development in a more casual, conversational environment. It's a place to ask questions, share experiences, and connect with others on similar career journeys.",
        },
    ]

    return (
        <div className="discord-community-page">
            <NavBar />

            {/* Hero Section */}
            <section
                id="hero"
                className="hero-section animate-section"
                style={{
                    opacity: isVisible.hero ? 1 : 0,
                    transform: isVisible.hero ? "translateY(0)" : "translateY(20px)",
                }}
            >
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="discord-label">DISCORD COMMUNITY</div>
                        <h1>Find your people in the CareerExplorer Discord community</h1>
                        <p>Join our network and connect with career-focused individuals, just like you.</p>
                        <div className="hero-cta">
                            <button className="join-button">Join the community</button>
                            <span className="members-count">• 9165 members</span>
                        </div>
                    </div>
                    <div className="hero-channels">
                        <div className="channel-tags">
                            <span className="channel-tag">#career-questions</span>
                            <span className="channel-tag">#career-planning</span>
                            <span className="channel-tag">#changing-careers</span>
                            <span className="channel-tag">#helpful-resources</span>
                            <span className="channel-tag">#question-of-the-day</span>
                            <div className="typing-indicator">several people are typing...</div>
                        </div>
                        <div className="profile-bubbles">
                            <img src={placeholderImage || "/placeholder.svg"} alt="Community member" className="profile-bubble" />
                            <img src={placeholderImage || "/placeholder.svg"} alt="Community member" className="profile-bubble" />
                            <img src={placeholderImage || "/placeholder.svg"} alt="Community member" className="profile-bubble" />
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Discord Section */}
            <section
                id="whatIsDiscord"
                className="what-is-discord-section animate-section"
                style={{
                    opacity: isVisible.whatIsDiscord ? 1 : 0,
                    transform: isVisible.whatIsDiscord ? "translateY(0)" : "translateY(20px)",
                }}
            >
                <div className="container">
                    <div className="discord-explanation">
                        <div className="channel-list">
                            <div className="channel-item"># ask-a-career-question</div>
                            <div className="channel-item"># career-launcher</div>
                            <div className="channel-item"># helpful-resources</div>
                            <div className="channel-item"># watercooler</div>
                        </div>
                        <div className="discord-chat-preview">
                            <div className="channel-name"># career-launcher</div>
                            <div className="chat-messages">
                                <div className="chat-message">
                                    <div className="message-avatar">
                                        <img src={placeholderImage || "/placeholder.svg"} alt="User" />
                                    </div>
                                    <div className="message-content">
                                        <div className="message-author">Metric</div>
                                        <div className="message-text">
                                            I plan to look more into technology and computer & informatics before I return to college. I have
                                            an AS in Mathematics currently and left college on great terms.
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-message">
                                    <div className="message-avatar">
                                        <img src={placeholderImage || "/placeholder.svg"} alt="User" />
                                    </div>
                                    <div className="message-content">
                                        <div className="message-author">ccnic42</div>
                                        <div className="message-text">
                                            Hey @Metric, I've been working as a data scientist for over 10 years now - I'd be happy to chat if
                                            you have any interest in data science or a related track!
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-message">
                                    <div className="message-avatar">
                                        <img src={placeholderImage || "/placeholder.svg"} alt="User" />
                                    </div>
                                    <div className="message-content">
                                        <div className="message-author">Metric</div>
                                        <div className="message-text">Great! Thank you~</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="discord-info">
                            <h2>What is Discord?</h2>
                            <h3>(Great question!)</h3>
                            <p>
                                Discord is an online social networking platform featuring thousands of servers focused on different
                                areas of interest. Our CareerExplorer Discord server is focused on (you guessed it) careers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Question Section */}
            <section
                id="careerQuestion"
                className="career-question-section animate-section"
                style={{
                    opacity: isVisible.careerQuestion ? 1 : 0,
                    transform: isVisible.careerQuestion ? "translateY(0)" : "translateY(20px)",
                }}
            >
                <div className="container">
                    <div className="career-question-content">
                        <div className="career-question-info info-container">
                            <div className="section-number">1</div>
                            <h2>Have a burning career question?</h2>
                            <p>
                                Use the #ask-a-career-question channel and we will do our best to answer it using our resources and
                                network.
                            </p>
                        </div>
                        <div className="discord-chat-example">
                            <div className="channel-name"># ask-a-career-question</div>
                            <div className="chat-messages">
                                <div className="chat-message">
                                    <div className="message-avatar">
                                        <img src={placeholderImage || "/placeholder.svg"} alt="User" />
                                    </div>
                                    <div className="message-content">
                                        <div className="message-author">
                                            Space <span className="message-time">Today at 11:45am</span>
                                        </div>
                                        <div className="message-text">
                                            I'm debating whether I want to switch majors from computer engineering to maybe civil engineering.
                                            Here are my results from the test.
                                        </div>
                                        <div className="message-image">
                                            <img src={placeholderImage || "/placeholder.svg"} alt="Test results" className="result-image" />
                                        </div>
                                        <div className="message-text">
                                            I'm just looking for advice on whether I should make a major switch, and any other help.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Launcher Section */}
            <section
                id="careerLauncher"
                className="career-launcher-section animate-section"
                style={{
                    opacity: isVisible.careerLauncher ? 1 : 0,
                    transform: isVisible.careerLauncher ? "translateY(0)" : "translateY(20px)",
                    backgroundImage: "url('/assets/career-launcher-bg.png')", // Fixed path
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container">
                    <div className="career-launcher-content">
                        <div className="career-launcher-info info-container">
                            <div className="section-number">2</div>
                            <h2>Want to talk through launching a career for the first time?</h2>
                            <p>
                                Tap into the #career-launcher channel to find people just like you to share tips and engage in
                                conversation.
                            </p>
                        </div>
                        <div className="discord-chat-example career-launcher-chat">
                            <div className="channel-name"># career-launcher</div>
                            <div className="chat-messages">
                                <div className="chat-message">
                                    <div className="message-avatar">
                                        <img src={placeholderImage || "/placeholder.svg"} alt="User" />
                                    </div>
                                    <div className="message-content">
                                        <div className="message-author">
                                            Alexander <span className="message-time">Today at 12:11pm</span>
                                        </div>
                                        <div className="message-text">
                                            I was wondering what I should major in. Political Science peaks my interest and it seems that a
                                            lot of government officials have a degree in political science but I also read that it's hard for
                                            a political science major to get a job.
                                        </div>
                                        <div className="message-reactions">
                                            <span className="reaction">2</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-message">
                                    <div className="message-avatar">
                                        <img src={placeholderImage || "/placeholder.svg"} alt="User" />
                                    </div>
                                    <div className="message-content">
                                        <div className="message-author">
                                            dee <span className="message-time">Today at 12:24pm</span>
                                        </div>
                                        <div className="message-text">
                                            hey @Alexander have you ever given any thought to becoming an ambassador? some food for thought:
                                        </div>
                                        <div className="message-link">
                                            <a href="https://www.careerexplorer.com/careers/ambassador/how-to-become/" className="link">
                                                https://www.careerexplorer.com/careers/ambassador/how-to-become/
                                            </a>
                                        </div>
                                        <div className="message-card">
                                            <img src={placeholderImage || "/placeholder.svg"} alt="Ambassador" className="card-image" />
                                            <div className="card-title">How to become an ambassador</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Study Tips Section */}
            <section
                id="studyTips"
                className="study-tips-section animate-section"
                style={{
                    opacity: isVisible.studyTips ? 1 : 0,
                    transform: isVisible.studyTips ? "translateY(0)" : "translateY(20px)",
                    backgroundImage: "url('/assets/study-tips-bg.png')", // Fixed path
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container">
                    <div className="study-tips-content">
                        <div className="discord-chat-example study-tips-chat">
                            <div className="channel-name"># study-tips</div>
                            <div className="chat-messages">
                                <div className="chat-message">
                                    <div className="message-avatar">
                                        <img src={placeholderImage || "/placeholder.svg"} alt="User" />
                                    </div>
                                    <div className="message-content">
                                        <div className="message-author">
                                            dee <span className="message-time">Today at 1:05pm</span>
                                        </div>
                                        <div className="message-text">
                                            It's easy to get distracted when studying or working. Any good tips on how to stay focused?
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-message">
                                    <div className="message-avatar">
                                        <img src={placeholderImage || "/placeholder.svg"} alt="User" />
                                    </div>
                                    <div className="message-content">
                                        <div className="message-author">
                                            eric-blue <span className="message-time">Today at 1:25pm</span>
                                        </div>
                                        <div className="message-text">
                                            I have been listening to the same playlist for 4 years. When I have it on, it's time to focus 😎
                                        </div>
                                        <div className="message-reactions">
                                            <span className="reaction">
                                                <Heart size={16} /> 5
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-message">
                                    <div className="message-avatar">
                                        <img src={placeholderImage || "/placeholder.svg"} alt="User" />
                                    </div>
                                    <div className="message-content">
                                        <div className="message-author">
                                            Cafpj! <span className="message-time">Today at 3:22pm</span>
                                        </div>
                                        <div className="message-text">
                                            One great study tip: noise cancelling headphones and some music that makes you focus. For me
                                            that's lo-fi hip hop beats to study/relax to or thunderstorm asmr or fireplace asmr
                                        </div>
                                        <div className="message-reactions">
                                            <span className="reaction">💬 3</span>
                                            <span className="reaction">👍 2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="study-tips-info info-container">
                            <div className="section-number">3</div>
                            <h2>Need resources or study tips?</h2>
                            <p>Discover #helpful-resources and #study-tips channels to unlock the support you need.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversations Section */}
            <section
                id="conversations"
                className="conversations-section animate-section"
                style={{
                    opacity: isVisible.conversations ? 1 : 0,
                    transform: isVisible.conversations ? "translateY(0)" : "translateY(20px)",
                }}
            >
                <div className="container">
                    <div className="conversations-content">
                        <div className="conversations-info info-container">
                            <div className="section-number">4</div>
                            <h2>Looking for great conversations?</h2>
                            <p>Connect with peers in our #water-cooler and #question-of-the-day channels, and so many more.</p>
                        </div>
                        <div className="discord-chat-example">
                            <div className="channel-name"># question-of-the-day</div>
                            <div className="chat-messages">
                                <div className="chat-message">
                                    <div className="message-avatar">
                                        <img src={placeholderImage || "/placeholder.svg"} alt="User" />
                                    </div>
                                    <div className="message-content">
                                        <div className="message-author">
                                            dee <span className="message-time">Today at 3:44pm</span>
                                        </div>
                                        <div className="message-text">What's the one thing that should be taught in school but isn't?</div>
                                    </div>
                                </div>
                                <div className="chat-message">
                                    <div className="message-avatar">
                                        <img src={placeholderImage || "/placeholder.svg"} alt="User" />
                                    </div>
                                    <div className="message-content">
                                        <div className="message-author">
                                            eric-blue <span className="message-time">Today at 4:23pm</span>
                                        </div>
                                        <div className="message-text">
                                            Rejection when applying for jobs. It's a natural part of the hiring process to be rejected. Having
                                            expectations surrounding that could help people enter the job hunt without getting discouraged.
                                        </div>
                                        <div className="message-reactions">
                                            <span className="reaction">👍 4</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Join Section */}
            <section
                id="steps"
                className="steps-section animate-section"
                style={{
                    opacity: isVisible.steps ? 1 : 0,
                    transform: isVisible.steps ? "translateY(0)" : "translateY(20px)",
                }}
            >
                <div className="container">
                    <h2>How can I get in?</h2>
                    <p className="steps-subtitle">(Great news, it's free for now.)</p>

                    <div className="steps-container">
                        <div className="step">
                            <div className="step-number">STEP 1</div>
                            <div className="step-icon">
                                <div className="discord-icon">
                                    <img src={placeholderImage || "/placeholder.svg"} alt="Discord logo" />
                                </div>
                                <div className="device-icons">
                                    <Monitor size={24} />
                                    <Tablet size={20} />
                                    <Smartphone size={16} />
                                </div>
                            </div>
                            <h3>
                                Sign up for Discord using this{" "}
                                <a href="#" className="link">
                                    link
                                </a>
                                .
                            </h3>
                            <p className="step-note">
                                (Helpful tip: It is easiest to download and use the Discord desktop application.)
                            </p>
                        </div>

                        <div className="step">
                            <div className="step-number">STEP 2</div>
                            <div className="step-icon">
                                <div className="verification-image">
                                    <img src={placeholderImage || "/placeholder.svg"} alt="Verification" />
                                </div>
                            </div>
                            <h3>Get verified by clicking the blue dot emoji to access all of our channels.</h3>
                        </div>

                        <div className="step">
                            <div className="step-number">STEP 3</div>
                            <div className="step-icon">
                                <div className="introduction-image">
                                    <img src={placeholderImage || "/placeholder.svg"} alt="Introduction" />
                                </div>
                            </div>
                            <h3>Introduce yourself using the #introductions channel.</h3>
                        </div>

                        <div className="step">
                            <div className="step-number">STEP 4</div>
                            <div className="step-icon">
                                <div className="community-image">
                                    <img src={placeholderImage || "/placeholder.svg"} alt="Community" />
                                </div>
                            </div>
                            <h3>Meet great people focused on finding a career path they love.</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section
                id="testimonials"
                className="testimonials-section animate-section"
                style={{
                    opacity: isVisible.testimonials ? 1 : 0,
                    transform: isVisible.testimonials ? "translateY(0)" : "translateY(20px)",
                    backgroundImage: "url('/assets/testimonials-bg.png')", // Fixed path
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container">
                    <h2>Hear from our members:</h2>

                    <div className="testimonials-container">
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <img src={placeholderImage || "/placeholder.svg"} alt="Bailey T." className="testimonial-avatar" />
                                <div className="testimonial-author">
                                    <h4>Bailey T.</h4>
                                    <span className="member-badge">MEMBER</span>
                                </div>
                            </div>
                            <p className="testimonial-text">
                                "I needed help figuring out how to use my degree. I used #ask-a-career-question and got great
                                information."
                            </p>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <img src={placeholderImage || "/placeholder.svg"} alt="Marissa C." className="testimonial-avatar" />
                                <div className="testimonial-author">
                                    <h4>Marissa C.</h4>
                                    <span className="member-badge">MEMBER</span>
                                </div>
                            </div>
                            <p className="testimonial-text">
                                "I made new friends also looking to apply to college. Everyone is so helpful!"
                            </p>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <div className="testimonial-avatar initials">DT</div>
                                <div className="testimonial-author">
                                    <h4>Dan T.</h4>
                                    <span className="member-badge">MEMBER</span>
                                </div>
                            </div>
                            <p className="testimonial-text">
                                "I use this server every week to chat with friends and ask career questions."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                id="cta"
                className="cta-section animate-section"
                style={{
                    opacity: isVisible.cta ? 1 : 0,
                    transform: isVisible.cta ? "translateY(0)" : "translateY(20px)",
                    backgroundImage: "url('../assets/testimonials-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container">
                    <div className="cta-content">
                        <h2>
                            Explore our different channels to ask questions, start conversations, give advice, and support other
                            members.
                        </h2>
                        <p>No pressure. You don't have to get anything "right".</p>
                        <button className="join-button">Join the community</button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section
                id="faq"
                className="faq-section animate-section"
                style={{
                    opacity: isVisible.faq ? 1 : 0,
                    transform: isVisible.faq ? "translateY(0)" : "translateY(20px)",
                }}
            >
                <div className="container">
                    <h2>Frequently Asked Questions</h2>

                    <div className="faq-container">
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className={`faq-item ${expandedFaq === index ? "expanded" : ""}`}
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="faq-question">
                                    {item.question}
                                    <ChevronRight className="faq-icon" />
                                </div>
                                <div className="faq-answer">{item.answer}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-columns">
                        <div className="footer-column">
                            <h3>FOR INDIVIDUALS</h3>
                            <ul>
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Sign Up</Link>
                                </li>
                                <li>
                                    <Link to="/test">The CareerExplorer Career Test</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>EXPLORE</h3>
                            <ul>
                                <li>
                                    <Link to="/collections">Career Collections</Link>
                                </li>
                                <li>
                                    <Link to="/right-career">What Career Is Right For Me?</Link>
                                </li>
                                <li>
                                    <Link to="/finance">Careers in Finance</Link>
                                </li>
                                <li>
                                    <Link to="/medicine">Careers in Medicine</Link>
                                </li>
                                <li>
                                    <Link to="/psychology">Careers in Psychology</Link>
                                </li>
                                <li>
                                    <Link to="/travel">Careers in Travel</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>FOR ORGANIZATIONS</h3>
                            <ul>
                                <li>
                                    <Link to="/organizations">CareerExplorer for Organizations</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3>&nbsp;</h3>
                            <ul>
                                <li>
                                    <Link to="/about">About CareerExplorer</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/faq">FAQ Knowledge Base</Link>
                                </li>
                                <li>
                                    <Link to="/terms">Terms & conditions</Link>
                                </li>
                                <li>
                                    <Link to="/privacy">Privacy</Link>
                                </li>
                                <li>
                                    <Link to="/accessibility">Accessibility</Link>
                                </li>
                                <li>
                                    <Link to="/do-not-sell">Do Not Sell My Personal Information</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-copyright">© SOKANU INTERACTIVE INC. 2023</div>
                </div>
            </footer>
        </div>
    )
}

