// Вывод строки по разности дат на английском
function getDeltaDateEn(dateString)
{
	// Вычисление разности во времени
	const deltaTime = new Date() - new Date(dateString);
	const deltaDays = deltaTime / 86400000; // 86400000 с в дне
	const deltaYearsInt = Math.floor(deltaDays / 365.25);
	const deltaMonthsInt = Math.floor(deltaDays % 365.25 / 30.4375); // 30.4375 сут в месяце
	
	// Особый случай
	if(deltaYearsInt == 0 && deltaMonthsInt == 0)
	{
		return '0\u00A0months';
	}
					
	// Добавление строки про года
	let result = '';
	let temp = '';
	if (deltaYearsInt != 0)
	{
		temp = 'years';
		if(deltaYearsInt == 1)
		{
			temp = 'year';
		}
		result += deltaYearsInt + '\u00A0' + temp;
		if (deltaMonthsInt == 0)
		{
			return result;
		}
		result += ' ';
	}
	
	// Добавление строки про месяцы
	temp = 'months';
	if(deltaMonthsInt == 1)
	{
		temp = 'month';
	}
	result += deltaMonthsInt + '\u00A0' + temp;
				
	return result;
}


// Вывод строки по разности дат на русском
function getDeltaDateRu(dateString)
{
	// Вычисление разности во времени
	const deltaTime = new Date() - new Date(dateString);
	const deltaDays = deltaTime / 86400000; // 86400000 с в дне
	const deltaYearsInt = Math.floor(deltaDays / 365.25);
	const deltaMonthsInt = Math.floor(deltaDays % 365.25 / 30.4375); // 30.4375 сут в месяце
	
	// Особый случай
	if(deltaYearsInt == 0 && deltaMonthsInt == 0)
	{
		return '0\u00A0месяцев';
	}
	
	// Добавление строки про года
	let result = '';
	let temp = '';
	if (deltaYearsInt != 0)
	{
		temp = 'лет';
		if(Math.floor((deltaYearsInt % 100) / 10) != 1)
		{
			if(deltaYearsInt % 10 == 1)
			{
				temp = 'год';
			}
			if(deltaYearsInt % 10 == 2 || deltaYearsInt % 10 == 3 || deltaYearsInt % 10 == 4)
			{
				temp = 'года';
			}
		}
		result += deltaYearsInt + '\u00A0' + temp;
		if (deltaMonthsInt == 0)
		{
			return result;
		}
		result += ' ';
	}
	
	// Добавление строки про месяцы
	temp = 'месяцев';
	if(deltaMonthsInt == 1)
	{
		temp = 'месяц';
	}
	if(deltaMonthsInt == 2 || deltaMonthsInt == 3 || deltaMonthsInt == 4)
	{
		temp = 'месяца';
	}
	result += deltaMonthsInt + '\u00A0' + temp;
	
	return result;
}


// Вывод информации об опыте на английском и русском
document.getElementById('experienceProfessionalEn').textContent = getDeltaDateEn('2013-10-01T00:00:00');
document.getElementById('experienceProfessionalRu').textContent = getDeltaDateRu('2013-10-01T00:00:00');
document.getElementById('experienceTeachingEn').textContent = getDeltaDateEn('2015-09-01T00:00:00');
document.getElementById('experienceTeachingRu').textContent = getDeltaDateRu('2015-09-01T00:00:00');
document.getElementById('experiencePstuEn').textContent = getDeltaDateEn('2025-09-01T00:00:00');
document.getElementById('experiencePstuRu').textContent = getDeltaDateRu('2025-09-01T00:00:00');


// Получить настоящий год
document.getElementById('year').textContent = new Date().getFullYear();