import React, { useState } from 'react';

const curriculumModules = [
  {
    month: 'Month 1',
    title: 'Computer Basics, Cloud & Systems Architecture',
    weeks: 'Week 1 - 4 (16 Days)',
    topics: [
      'Cloud Collaboration Tools (Google Drive, Docs, Realtime Setup)',
      'PC Hardware Architecture (CPU, NVMe, Memory Auditing)',
      'CLI Fundamentals (PowerShell & Linux Bash Navigation)',
      'Networking Fundamentals (TCP/IP, OSI, DNS, HTTP/HTTPS)',
      'Spreadsheet Analytics & Lookups (Logic, VLOOKUP, Slicers)',
      'Cyber Security & Endpoint Hygiene (2FA, Firewalls, Hashing)',
      'Web Fundamentals (Semantic HTML5 & Modern CSS Layouts)'
    ]
  },
  {
    month: 'Month 2',
    title: 'Python Programming & Automation Engineering',
    weeks: 'Week 5 - 8 (16 Days)',
    topics: [
      'Python Syntax, Control Flow, and Exception Handling',
      'Data Structures (Lists, Tuples, Dictionaries, Sets)',
      'Functions, Modular Programming, and Clean Code Principles',
      'OOP in Python (Classes, Encapsulation, Inheritance, Polymorphism)',
      'File I/O, JSON Handling & CSV Data Processing',
      'API Integration (Requests library, REST Endpoints, OAuth)',
      'Automation Scripting (Task schedulers, Telegram bots, gspread)'
    ]
  },
  {
    month: 'Month 3',
    title: 'Linux System Administration & Server Infrastructure',
    weeks: 'Week 9 - 12 (16 Days)',
    topics: [
      'Linux FHS & Architecture (Debian, Ubuntu, Kali, CentOS, RPi OS)',
      'Advanced CLI Tools (grep, sed, awk, systemctl, journalctl)',
      'User & Group Management, File Permissions (chmod, chown, SUID)',
      'Networking Configuration, SSH Remote Key Setup, and UFW Firewall',
      'Package Managers & Source Compilations (apt, yum/dnf)',
      'Bash Scripting & Cron Automated Jobs',
      'Offline LMS Server Deployment (Raspberry Pi & Moodle Setup)'
    ]
  },
  {
    month: 'Month 4',
    title: 'Relational Database Engineering & Enterprise Integration',
    weeks: 'Week 13 - 16 (16 Days)',
    topics: [
      'RDBMS Fundamentals, Relational Schemas & ERD Design',
      'SQL DDL & DML (CREATE, INSERT, UPDATE, DELETE)',
      'Advanced SQL (Complex JOINs, Subqueries, Indexes, Aggregations)',
      'Transactions, ACID Properties, and Integrity Constraints',
      'Python DB Integration (SQLAlchemy ORM, psycopg2, SQLite3)',
      'Cloud Deployment Basics (Docker Containers, AWS EC2, S3 & Load Balancer)'
    ]
  }
];

export default function CurriculumPage() {
  const [selectedMonth, setSelectedMonth] = useState('All');

  const filtered = selectedMonth === 'All'
    ? curriculumModules
    : curriculumModules.filter(m => m.month === selectedMonth);

  return (
    <div className="py-5 bg-white min-vh-100">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">Enterprise Technical Curriculum</h2>
          <p className="text-secondary fs-6 mt-2">
            4-Month (16 Weeks / 64 Days) Hands-on Intensive IT, Systems & Backend Roadmap
          </p>
          <div className="d-flex justify-content-center mt-2">
            <div style={{ width: '60px', height: '4px', backgroundColor: '#0d6efd', borderRadius: '2px' }}></div>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
          {['All', 'Month 1', 'Month 2', 'Month 3', 'Month 4'].map(m => (
            <button
              key={m}
              onClick={() => setSelectedMonth(m)}
              className={`btn btn-sm px-4 rounded-pill ${
                selectedMonth === m ? 'btn-dark' : 'btn-outline-secondary'
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Modules Grid */}
        <div className="row g-4 mt-2">
          {filtered.map((item, idx) => (
            <div key={idx} className="col-12 col-lg-6">
              <div className="card h-100 border shadow-sm rounded-4 p-4">
                <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
                  <div>
                    <span className="badge bg-primary text-white rounded-pill px-3 py-1 mb-1">
                      {item.month}
                    </span>
                    <h5 className="fw-bold mb-0 mt-1">{item.title}</h5>
                  </div>
                  <small className="text-muted fw-semibold">{item.weeks}</small>
                </div>
                <ul className="list-group list-group-flush">
                  {item.topics.map((t, tIdx) => (
                    <li key={tIdx} className="list-group-item px-0 py-2 border-0 d-flex align-items-start">
                      <span className="text-primary me-2 fw-bold">✓</span>
                      <span className="text-secondary" style={{ fontSize: '0.92rem' }}>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 p-4 rounded-4 bg-light border text-center">
          <h5 className="fw-bold">Teaching Methodology: 70% Practical / 30% Theory</h5>
          <p className="text-muted mb-0 small">
            အပတ်စဉ် Daily MCQ Quizs၊ Automated Artifact Verification နှင့် Hands-on Laboratory Projects များဖြင့် လက်တွေ့ စနစ်တကျ သင်ကြားပေးပါသည်။
          </p>
        </div>
      </div>
    </div>
  );
}