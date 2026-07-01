document.addEventListener('DOMContentLoaded', () => {
    const rolesData = {
        'corp-secretarial': {
            label: 'CORPORATE SECRETARIAL',
            title: 'Delegate corporate documentation of meetings, resolutions, and corporate actions in consistent format across every entity, every time.',
            desc: 'Associum prepares the board resolutions, statutory filings, and minutes with consistency and precision, across a growing list of entities and jurisdictions.',
            features: [
                'Gets context from past board packs, meeting notes, and governance documentation.',
                'Structures the documents, resolutions, or minutes against firm templates and precedents.',
                'Drafts statutory documents in a near-final form for your review and sign-off.',
                'You manage governance, not repetitive documentation.'
            ],
            sampleTitle: 'Board Resolution Pack',
            sampleDesc: 'Statutory resolutions and minutes drafted from board packs, consistent across entities and filings.'
        },
        'regulatory-compliance': {
            label: 'REGULATORY COMPLIANCE',
            title: 'Keep pace with a rapidly developing regulatory environment, identifying gaps and developing remediation plans.',
            desc: 'Associum reads, interprets, and traces regulatory updates to the policies, procedures and disclosures they effect.',
            features: [
                'Reviews and analyses new regulations, guidance notes, and existing policy documents.',
                'Maps regulatory changes against current policies and procedures.',
                'Drafts the gap analysis and policy update recommendations.',
                'You can respond more quickly and confidently to regulatory shifts and mitigate their impacts.'
            ],
            sampleTitle: 'Regulatory Gap Analysis',
            sampleDesc: 'Policy impact assessment and update recommendations mapped directly from new regulatory guidance.'
        },
        'governance-esg': {
            label: 'GOVERNANCE & ESG',
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
        },
        'kyc': {
            label: 'KYC',
            title: 'Simplify and scale your KYC reviews and risk assessments.',
            desc: 'Every onboarding and periodic review generates the same structure of work — documents collected, risk factors assessed, and a file written up to a standard that holds under audit.',
            features: [
                'Reads KYC documents, screening results, and risk questionnaires.',
                'Structures findings against your risk assessment framework.',
                'Drafts the customer due diligence file, ready for review and sign-off.',
                'More files cleared per cycle, fewer hours spent on write-up.'
            ],
            sampleTitle: 'Customer Due Diligence File',
            sampleDesc: 'Review-ready CDD file from screening and documentation to a structured risk assessment.'
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
