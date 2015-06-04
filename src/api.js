exports.ajaxByCountry = function(countryId) {
	// return $.ajax({
	// 	url: '/city/province',
	// 	dataType: 'json',
	// 	data: {countryId: countryId},
	// });
	var deferred =  $.Deferred();
	deferred.resolve({
		cityList: [{id: 1, name: '昆明', selected: true}, {id: 2, name: '丽江'}],
		regionList: [{id: 2, name: '丽江大区'}]
	});
	return deferred;
};

exports.ajaxByProvince = function(provinceId) {
	// return $.ajax({
	// 	url: '/city/regionAndCity',
	// 	dataType: 'json',
	// 	data: {provinceId: provinceId},
	// });

	var data = {
		cityList: [{id: 1, name: '昆明', selected: true}, {id: 2, name: '丽江'}],
		regionList: [{id: 2, name: '丽江大区'}]
	};
	if (provinceId == 1) {
		data = {
			cityList: [{id: 1, name: '成都', selected: true}, {id: 2, name: '绵阳'}],
			regionList: [{id: 1, name: '成都大区'}]
		};
	}
	var deferred =  $.Deferred();
	deferred.resolve(data);
	return deferred;
};
