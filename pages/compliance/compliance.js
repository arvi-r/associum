document.addEventListener('DOMContentLoaded', () => {
    const rolesData = {
        'corp-secretarial': {
            label: 'CORPORATE SECRETARIAL',
            title: 'Drafting board resolutions, meeting minutes, and corporate filings shouldn\'t consume days.',
            desc: 'Keep entity records up-to-date and generate compliance documentation. Associum turns board notes and filings into structured resolutions and registers.',
            features: [
                'Converts meeting notes into structured board resolutions.',
                'Drafts statutory registers and annual return filings.',
                'Maintains consistency of entity details across all jurisdictions.',
                'You review and execute — your corporate secretarial signature.'
            ],
            sampleTitle: 'Board Resolution.',
            sampleDesc: 'Complete board resolution from meeting notes and statutory guidelines, fully structured.'
        },
        'regulatory-compliance': {
            label: 'REGULATORY COMPLIANCE',
            title: 'Regulations update. Aligning policies to guidelines is the cycle.',
            desc: 'Compliance teams monitor regulations and update company policy. Associum reads regulatory updates and maps policy adjustments.',
            features: [
                'Reads regulatory change alerts and guidelines.',
                'Maps policies against updated regulatory standards.',
                'Drafts compliance policy updates and guidelines.',
                'You approve the updates — your compliance guidance, your policy decisions.'
            ],
            sampleTitle: 'Compliance Policy Update.',
            sampleDesc: 'Regulatory analysis, policy gaps, and recommended compliance policy updates.'
        },
        'governance-esg': {
            label: 'GOVERNANCE & ESG',
            title: 'Frameworks defined. Documenting governance is the task.',
            desc: 'ESG leads map governance practices and test ESG frameworks. Associum drafts governance matrices and ESG report sections from disclosure data.',
            features: [
                'Reads company data and ESG disclosures.',
                'Maps governance practices against frameworks (GRI, CSRD).',
                'Drafts governance report sections and ESG disclosures.',
                'You sign off on disclosure — your governance judgment, your ESG report stamp.'
            ],
            sampleTitle: 'Governance Report Section.',
            sampleDesc: 'ESG compliance disclosures, governance matrix, and compliance status explanation.'
        },
        'kyc': {
            label: 'KYC & ONBOARDING',
            title: 'Documents gathered. Writing KYC profiles is the bottleneck.',
            desc: 'KYC teams review client documents to write risk profiles. Associum reads corporate structures, registry documents, and passports to write KYC profiles.',
            features: [
                'Reads registry files, corporate structures, and ID documents.',
                'Maps ownership structures and flags potential risks.',
                'Drafts KYC onboarding profiles and risk assessments.',
                'You clear the client — your risk judgment, your client onboarding approval.'
            ],
            sampleTitle: 'KYC Risk Profile.',
            sampleDesc: 'Corporate structure map, risk assessment, and onboarding profile.'
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
