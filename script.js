  // Toggle social media options
  function toggleSocialOptions() {
    // Hide all options first
    document.querySelectorAll('.social-options').forEach(el => {
      el.style.display = 'none';
    });
    
    // Show selected option
    const selected = document.getElementById('social-select').value;
    if (selected) {
      document.getElementById(`${selected}-options`).style.display = 'block';
    }
  }

  // Generate signature
  document.getElementById('generate-btn').addEventListener('click', function() {
    const selectedSocial = document.getElementById('social-select').value;
    let socialHTML = '';
    
    if (selectedSocial === 'instagram') {
      const url = document.getElementById('instagram-url').value;
      const text = document.getElementById('instagram-text').value || 'Instagram';
      socialHTML = `
        <tr>
          <td style="padding: 3px 0;">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" class="social-icon" alt="Instagram">
            <a href="${url}" style="color: #0066cc; text-decoration: none;">${text}</a>
          </td>
        </tr>
      `;
    }
    // Add other social networks similarly...
    
    const signatureHTML = `
    <table style="font-family: Arial, sans-serif; font-size: 13px; border-left: 3px solid #0066cc; padding-left: 15px; margin: 0; color: #333; line-height: 1.5;">
      <tr>
        <td style="padding: 3px 0;"><strong>${document.getElementById('nome').value}</strong></td>
      </tr>
      <tr>
        <td style="padding: 3px 0;"><em>${document.getElementById('cargo').value}</em></td>
      </tr>
      <tr>
        <td style="padding: 3px 0;">
          📞 ${document.getElementById('telefone').value}
        </td>
      </tr>
      <tr>
        <td style="padding: 3px 0;">
          ✉️ <a href="mailto:${document.getElementById('email').value}" style="color: #0066cc; text-decoration: none;">
            ${document.getElementById('email').value}
          </a>
        </td>
      </tr>
      ${socialHTML}
    </table>
    `;
    
    document.getElementById('signature-preview').innerHTML = signatureHTML;
    document.getElementById('html-output').value = signatureHTML;
  });

  // Copy HTML
  document.getElementById('copy-btn').addEventListener('click', function() {
    const htmlOutput = document.getElementById('html-output');
    htmlOutput.select();
    document.execCommand('copy');
    
    // Visual feedback
    const btn = this;
    btn.textContent = 'Copiado!';
    setTimeout(() => {
      btn.textContent = 'Copiar HTML';
    }, 2000);
  });