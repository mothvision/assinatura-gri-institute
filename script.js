const inputs = document.querySelectorAll('input, select');
const preview = document.getElementById('signature-preview');
const copyBtn = document.getElementById('copy-btn');

function updatePreview() {
  const name = document.getElementById('name').value || 'Full Name';
  const area = document.getElementById('area').value || 'Department/Area';
  const phone = document.getElementById('phone').value || '+00 00 0 0000 0000';
  const unit = document.getElementById('business-unit').value;

  const signatureHTML = `
    <table style="font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  padding: 30px;
  color: #333;
  line-height: 1.6;
  width: 100%;
  table-layout: auto;
  word-break: break-word;"
  >
      <tr><td style="font-size:1.25rem;"><strong>${name}</strong></td></tr>
      <tr><td><em>${area}</em></td></tr>
      <tr><td>M: <strong>${phone}</strong></td></tr>
      <tr><td style="display:block;padding-top:15px;"><img src="https://cdn.griinstitute.org/uploads/files/logo_gri_institute_2025_6_26_17_03_22_1750957402.webp" alt="GRI Institute Logo" width="152"></td></tr>
      <tr><td style="font-size:0.875rem;color:#9B9B9B"><i>“Building the future through strategic thinking and extraordinary relationships”</i></td></tr>
      <tr><td style="border-bottom: 1px solid #cccccc;"></td></tr>
      <tr>
        <td style="padding-top: 8px; display:flex;flex-wrap:wrap;gap:15px;font-size:0.875rem;">
          <a target="_blank" href="https://griinstitute.org" style="color: #283858;text-decoration: underline;display:flex;align-items:center;gap:5px;">
            <img src="https://cdn.griinstitute.org/uploads/files/globe_2025_6_26_17_03_21_1750957401.webp" alt="Website" height="18" style="vertical-align: middle;"> griinstitute.org
          </a>
          <a target="_blank" href="https://linkedin.com/company/griinstitute" style="color: #283858;text-decoration: underline;display:flex;align-items:center;gap:5px;">
            <img src="https://cdn.griinstitute.org/uploads/files/linkedin_2025_6_26_17_03_21_1750957401.webp" alt="LinkedIn" height="18" style="vertical-align: middle;"> LinkedIn
          </a>
          <a target="_blank" href="https://instagram.com/griinstitute" style="color: #283858;text-decoration: underline;display:flex;align-items:center;gap:5px;">
            <img src="https://cdn.griinstitute.org/uploads/files/instagram_2025_6_26_17_03_21_1750957401.webp" alt="Instagram" height="18" style="vertical-align: middle;"> Instagram
          </a>
          <a target="_blank" href="https://youtube.com/@GRIInstitute" style="color: #283858;text-decoration: underline; display:flex;align-items:center;gap:5px;">
            <img src="https://cdn.griinstitute.org/uploads/files/youtube_2025_6_26_17_03_21_1750957401.webp" alt="YouTube" height="18" style="vertical-align: middle;"> YouTube
          </a>
        </td>
      </tr>
    </table>
  `;

  preview.innerHTML = signatureHTML;
}

inputs.forEach(input => input.addEventListener('input', updatePreview));
updatePreview();

copyBtn.addEventListener('click', function () {
  const range = document.createRange();
  range.selectNodeContents(preview);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    const success = document.execCommand('copy');
    selection.removeAllRanges();

    this.textContent = success ? 'Copied!' : 'Copy failed';
  } catch (err) {
    this.textContent = 'Error copying';
  }

  setTimeout(() => this.textContent = 'Copy Signature', 2000);
});