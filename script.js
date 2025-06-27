const inputs = document.querySelectorAll('input, select');
const preview = document.getElementById('signature-preview');
const copyBtn = document.getElementById('copy-btn');
const showPhoneCheckbox = document.getElementById('showPhone');
const phoneRow = document.getElementById('phoneRow');

const businessLinks = {
  "Global": {
    linkedin: {
      url: "https://www.linkedin.com/company/griinstitute/",
      text: "griinstitute",
    },
    instagram: {
      url: "https://www.instagram.com/griinstitute/",
      text: "griinstitute",
    },
  },
  "RE Brazil": {
    linkedin: {
      url: "https://www.linkedin.com/showcase/gri-institute-brasil/",
      text: "gri-institute-brasil"
    },
    instagram: {
      url: "https://www.instagram.com/griinstitute.brazil/",
      text: "griinstitute.brazil"
    }
  },
  "RE India": {
    linkedin: {
      url: "https://www.linkedin.com/showcase/gri-institute-india/",
      text: "gri-institute-india"
    },
    instagram: {
      url: "https://instagram.com/griinstitute.india",
      text: "griinstitute.india"
    }
  },
  "RE Europe": {
    linkedin: {
      url: "https://www.linkedin.com/showcase/gri-institute-europe/",
      text: "gri-institute-europe"
    },
    instagram: {
      url: "https://instagram.com/griinstitute.europe",
      text: "griinstitute.europe"
    }
  },
  "RE Latam": {
    linkedin: {
      url: "https://www.linkedin.com/showcase/gri-institute-latam/",
      text: "gri-institute-latam"
    },
    instagram: {
      url: "https://instagram.com/griinstitute.latam",
      text: "griinstitute.latam"
    }
  },
  "Infrastructure": {
    linkedin: {
      url: "https://www.linkedin.com/showcase/gri-institute-infrastructure/",
      text: "gri-institute-infrastructure"
    },
    instagram: {
      url: "https://www.instagram.com/griinstitute.infra/",
      text: "griinstitute.infra"
    }
  },
};

function updatePreview() {
  const name = document.getElementById('name').value || 'Full Name';
  const jobTitle = document.getElementById('jobTitle').value || 'Job Title';
  const phone = document.getElementById('phone').value.trim();
  const showPhone = showPhoneCheckbox.checked;
  const businessUnit = document.getElementById('business-unit').value;
  const links = businessLinks[businessUnit];

  const phoneRowHTML = (showPhone && phone)
    ? `<tr><td>M: <strong>+${phone}</strong></td></tr>`
    : '';

  const signatureHTML = `
    <table style="font-family: 'Montserrat', sans-serif;
      font-size: 1rem;
      padding: 20px 0;
      color: #333;
      line-height: 1.25;
      width: 100%;
      table-layout: auto;
      word-break: break-word;">
      
      <tr><td style="font-size:1.25rem;"><strong>${name}</strong></td></tr>
      <tr><td>${jobTitle}</td></tr>
      ${phoneRowHTML}
      <tr><td style="display:block;padding-top:15px;"><img src="https://cdn.griinstitute.org/uploads/files/signature_gri_logo_2025_6_27_12_45_40_1751028340.jpg" alt="GRI Institute Logo" width="160"></td></tr>
      <tr><td style="font-size:0.875rem;color:#9B9B9B"><i>“Building the future through strategic thinking and extraordinary relationships”</i></td></tr>
      <tr><td style="border-bottom: 1px solid #cccccc;"></td></tr>
      <tr>
        <td style="padding-top: 8px; font-size:0.825rem;">
          <a target="_blank" href="https://griinstitute.org" style="color: #283858;text-decoration: underline;align-items:center;margin-right:15px;margin-bottom:5px;display:inline-block;">
            <img src="https://cdn.griinstitute.org/uploads/files/signature_globe_icon_2025_6_26_20_11_19_1750968679.png" alt="Website" width="14" style="vertical-align: middle;margin-right:5px;">griinstitute.org
          </a>
          <a target="_blank" href="${links.linkedin.url}" style="color: #283858;text-decoration: underline;align-items:center;margin-right:15px;margin-bottom:5px;display:inline-block;">
            <img src="https://cdn.griinstitute.org/uploads/files/signature_linkedin_icon_2025_6_26_20_11_20_1750968680.png" alt="LinkedIn" width="14" style="vertical-align: middle;margin-right:5px;">${links.linkedin.text}
          </a>
          <a target="_blank" href="${links.instagram.url}" style="color: #283858;text-decoration: underline;align-items:center;margin-right:15px;margin-bottom:5px;display:inline-block;">
            <img src="https://cdn.griinstitute.org/uploads/files/signature_instagram_icon_2025_6_26_20_11_20_1750968680.png" alt="Instagram" width="14" style="vertical-align: middle;margin-right:5px;">${links.instagram.text}
          </a>
          <a target="_blank" href="https://youtube.com/@GRIInstitute" style="color: #283858;text-decoration: underline;align-items:center;display:inline-block;margin-bottom:5px;">
            <img src="https://cdn.griinstitute.org/uploads/files/signature_youtube_icon_2025_6_26_20_08_53_1750968533.png" alt="YouTube" width="14" style="vertical-align: middle;margin-right:5px;">@GRIInstitute
          </a>
        </td>
      </tr>
    </table>
  `;

  preview.innerHTML = signatureHTML;
}

inputs.forEach(input => input.addEventListener('input', updatePreview));
showPhoneCheckbox.addEventListener('change', () => {
  phoneRow.style.display = showPhoneCheckbox.checked ? 'block' : 'none';
  updatePreview();
});

updatePreview();

copyBtn.addEventListener('click', function () {
  const table = preview.querySelector('table');

  if (table) {
    const originalWidth = table.style.width;
    table.style.width = '700px';

    const range = document.createRange();
    range.selectNodeContents(preview);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      const success = document.execCommand('copy');
      this.textContent = success ? 'Copied!' : 'Copy failed';
    } catch (err) {
      this.textContent = 'Error copying';
    }

    window.getSelection().removeAllRanges();
    table.style.width = originalWidth;

    setTimeout(() => {
      this.textContent = 'Copy Signature';
    }, 4000);
  }
});