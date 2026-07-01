document.addEventListener('DOMContentLoaded', () => {
    const rolesData = {
        'audit-service': {
            label: 'AUDIT SERVICE',
            title: 'Review more sample documents, analyze the data at scale, and document the results and key issues in one workflow.',
            desc: 'Associum reviews documents and data at scale, providing analytical inputs and generating draft working papers and client deliverables for your input and perspective.',
            features: [
                'Reads workpapers, trial balances, and supporting schedules.',
                'Structures findings against the risk assessment and audit plan.',
                'Drafts the working paper or memo, cross-referenced and cited.',
                'You review and sign-off, applying your judgment, not your word processing skills.'
            ],
            sampleTitle: 'Audit Working Paper',
            sampleDesc: 'Review-ready working paper from testing data to documented conclusion, fully cross-referenced.'
        },
        'internal-finance': {
            label: 'INTERNAL FINANCE AND CONTROLS',
            title: 'Oversee the financial planning, controls, and accounts preparation, integrating firm performance data with internal projections and policies with tracked risks.',
            desc: 'Associum enables performance tracking and risk monitoring at scale by automating structured deliverables that, with your final input, roll-up into critical management reports.',
            features: [
                'Ingests internal documents, financial account information, and historical reports.',
                'Structures FP&A process, management account preparation, and controls monitoring.',
                'Drafts periodic reports with financial data and planning documents with clear, prioritised actions.',
                'You spend time on aligning performance with business goals and maintaining the control environment.'
            ],
            sampleTitle: 'Controls Remediation Plan',
            sampleDesc: 'Prioritised remediation plan from control testing results, ready for management sign-off.'
        },
        'valuations': {
            label: 'VALUATIONS',
            title: 'Build the models and the reports seamlessly in a single workflow.',
            desc: 'Associum performs any valuation task with simple prompts with outputs in the form of Excel-ready financial models and client-ready valuation reports, all well-cited with data from internal and external sources.',
            features: [
                'Aggregates valuation assumptions from financial documents, financial datasets, and web sources.',
                'Structures the valuation and creates a spreadsheet and report with methodology, assumptions, and conclusions.',
                'Drafts a near-final report for clients, with detailed citations, ready for your input and sign-off.',
                'You can focus on the judgment calls, not the mechanical valuation work.'
            ],
            sampleTitle: 'Business Valuation Report',
            sampleDesc: 'Defensible valuation report from model output to fully sourced methodology and conclusion.'
        },
        'non-financial': {
            label: 'NON-FINANCIAL ASSURANCE',
            title: 'Keep pace with fast-developing market expectations on ESG, sustainability, and other assurance matters.',
            desc: 'Associum aggregates internal and external metrics on ESG and sustainability, across structured and unstructured formats, for assessing company policies and aligning to global standards.',
            features: [
                'Ingests sustainability data, disclosures, and supporting evidence from internal and external data sources.',
                'Structures finding against relevant standards and highlights issues and risks.',
                'Drafts the assurance report with evidence properly referenced.',
                'Better alignment with standards, without the analytic and documentation burden.'
            ],
            sampleTitle: 'ESG Assurance Report',
            sampleDesc: 'Standards-aligned assurance report from sustainability data to evidenced conclusion.'
        }
    };

    const tabs = document.querySelectorAll('.role-tab');
    const contentLabel = document.getElementById('role-content-label');
    const contentTitle = document.getElementById('role-content-title');
    const contentDesc = document.getElementById('role-content-desc');
    const featuresList = document.getElementById('role-features-list');
    const sampleTitle = document.getElementById('role-sample-title');
    const sampleDesc = document.getElementById('role-sample-desc');

    function updateContent(roleId) {
        const data = rolesData[roleId];
        if (!data) return;

        // Add a simple fade effect
        const contentBox = document.querySelector('.role-content');
        contentBox.style.transition = 'opacity 0.2s ease';
        contentBox.style.opacity = '0';

        setTimeout(() => {
            contentLabel.textContent = data.label;
            contentTitle.textContent = data.title;
            contentDesc.textContent = data.desc;

            // Update features
            featuresList.innerHTML = '';
            data.features.forEach(feature => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#37B793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>${feature}</span>
                `;
                featuresList.appendChild(li);
            });

            sampleTitle.textContent = data.sampleTitle;
            sampleDesc.textContent = data.sampleDesc;

            contentBox.style.opacity = '1';
        }, 200);
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all
            tabs.forEach(t => t.classList.remove('active'));
            // Add active to clicked
            tab.classList.add('active');

            // Update content
            const role = tab.getAttribute('data-role');
            updateContent(role);
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = '0';
                otherItem.querySelector('.faq-icon').textContent = '+';
            });

            // Toggle clicked
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.textContent = '−';
            }
        });
    });
});
