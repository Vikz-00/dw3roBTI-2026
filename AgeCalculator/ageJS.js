const { DateTime } = luxon;

    document.getElementById('birthdate').setAttribute('max', DateTime.now().toISODate());

    function calcularEdad() {
      const input = document.getElementById('birthdate').value;
      const output = document.getElementById('output');

      if (!input) {
        output.innerHTML = '<span class="error">Please enter a valid date.</span>';
        return;
      }

      const birth = DateTime.fromISO(input);
      const now = DateTime.now();

      if (!birth.isValid || birth > now) {
        output.innerHTML = '<span class="error">Please enter a valid date.</span>';
        return;
      }

      const diff = now.diff(birth, ['years', 'months']).toObject();
      const years  = Math.floor(diff.years);
      const months = Math.floor(diff.months);

      output.innerHTML = `You are <strong>${years} years ${months} months</strong> old`;
    }