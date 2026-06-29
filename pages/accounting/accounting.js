document.addEventListener('DOMContentLoaded', () => {
    const rolesData = {
        'audit-service': {
            label: 'AUDIT SERVICE',
            title: 'Testing is done. Documenting it to standard is what eats the rest of the file.',
            desc: 'Every working paper, sample test, and conclusion has to be written up, cross-referenced, and tied back to the risk assessment before the file is review-ready.',
            features: [
                'Reads workpapers, trial balances, and supporting schedules.',
                'Structures findings against the risk assessment and audit plan.',
                'Drafts the working paper or memo, cross-referenced and cited.',
                'You review and sign off — your judgment, not your typing.'
            ],
            sampleTitle: 'Audit Working Paper.',
            sampleDesc: 'Review-ready working paper from testing data to documented conclusion, fully cross-referenced.'
        },
        'internal-finance': {
            label: 'INTERNAL FINANCE AND CONTROLS',
            title: 'Controls mapped. Documenting compliance is the overhead.',
            desc: 'Internal finance teams map processes and test control frameworks (like SOX). Associum drafts control matrices and narrative descriptions from process descriptions.',
            features: [
                'Reads process descriptions and system configurations.',
                'Maps controls against risks and regulatory standards.',
                'Drafts control testing papers and remediation plans.',
                'You sign off on assurance — your control judgment, your remediation decisions.'
            ],
            sampleTitle: 'Internal Controls Report.',
            sampleDesc: 'Control mapping matrix, testing documentation, and recommended remediation plans.'
        },
        'valuations': {
            label: 'VALUATIONS',
            title: 'Models built. Writing the valuation report takes the hours.',
            desc: 'Valuation specialists build DCF and comparable models. Associum reads the model outputs, market data, and company background to write the valuation report.',
            features: [
                'Reads financial model outputs and comparable company sheets.',
                'Synthesizes industry trends, market multiples, and company performance.',
                'Drafts valuation report with methodology, inputs, and ranges.',
                'You defend the value — your valuation thesis, your methodology adjustments.'
            ],
            sampleTitle: 'Valuation Report.',
            sampleDesc: 'Methodology description, comparable multiples, and valuation range explanation.'
        },
        'non-financial': {
            label: 'NON-FINANCIAL ASSURANCE',
            title: 'Assurance extended. Writing reports for ESG and operations is the cycle.',
            desc: 'Firms offer assurance on sustainability (ESG) and operational resilience. Associum drafts assurance reports from non-financial data rooms and metrics.',
            features: [
                'Reads ESG frameworks, carbon spreadsheets, and company disclosures.',
                'Maps disclosures against standards (GRI, SASB, CSRD).',
                'Drafts the non-financial assurance report, cited to source.',
                'You issue the opinion — your professional skepticism, your assurance stamp.'
            ],
            sampleTitle: 'ESG Assurance Report.',
            sampleDesc: 'Assurance scope description, testing procedures, and non-financial assurance opinion.'
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
