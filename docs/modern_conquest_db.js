//Add in branches_ranks
db.branches_ranks.save({name: 'Army', ranks: [
					{title: 'Seaman', available_from_level: '0', available_to_level: '1', created_date: new Date()},
				        {title: 'Leading Seaman', available_from_level: 2, available_to_level: 3, created_date: new Date()},
					{title: 'Petty Officer', available_from_level: 4, available_to_level: 5, created_date: new Date()},
					{title: 'Warrant Officer', available_from_level: 6, available_to_level: 7, created_date: new Date()},
					{title: 'Midshipman', available_from_level: 8, available_to_level: 9, created_date: new Date()},
					{title: 'Ensign', available_from_level: 10, available_to_level: 11, created_date: new Date()},
					{title: 'Sub-Lieutenant', available_from_level: 12, available_to_level: 13, created_date: new Date()},
					{title: 'Lieutenant', available_from_level: 14, available_to_level: 15, created_date: new Date()},
					{title: 'Lieutenant Commander', available_from_level: 16, available_to_level: 17, created_date: new Date()},
					{title: 'Commander', available_from_level: 18, available_to_level: 19, created_date: new Date()},
					{title: 'Captain', available_from_level: 20, available_to_level: 21, created_date: new Date()},
					{title: 'Commodore', available_from_level: 22, available_to_level: 23, created_date: new Date()},
					{title: 'Admiral', available_from_level: 24, available_to_level: 29, created_date: new Date()},
					{title: 'Admiral of the Fleet', available_from_level: 30, available_to_level: 30, created_date: new Date()}
					
				    ], created_date: new Date()});


db.branches_ranks.save({name: 'Navy', ranks: [
					{title: 'Private', available_from_level: '0', available_to_level: '1', created_date: new Date()},
					{title: 'Corporal', available_from_level: 2, available_to_level: 3, created_date: new Date()},
					{title: 'Sergeant', available_from_level: 4, available_to_level: 5, created_date: new Date()},
					{title: 'Sergeant Major', available_from_level: 6, available_to_level: 7, created_date: new Date()},
					{title: 'Officer Cadet', available_from_level: 8, available_to_level: 9, created_date: new Date()},
					{title: '2nd Lieutenant', available_from_level: 10, available_to_level: 11, created_date: new Date()},
					{title: 'Lieutenant', available_from_level: 12, available_to_level: 13, created_date: new Date()},
					{title: 'Captain', available_from_level: 14, available_to_level: 15, created_date: new Date()},
					{title: 'Commandant', available_from_level: 16, available_to_level: 17, created_date: new Date()},
					{title: 'Lieutenant Colonel', available_from_level: 18, available_to_level: 19, created_date: new Date()},
					{title: 'Colonel', available_from_level: 20, available_to_level: 21, created_date: new Date()},
					{title: 'Brigadier', available_from_level: 22, available_to_level: 23, created_date: new Date()},
					{title: 'General', available_from_level: 24, available_to_level: 29, created_date: new Date()},
					{title: 'Marshal', available_from_level: 30, available_to_level: 30, created_date: new Date()}

				    ], created_date: new Date()});

db.branches_ranks.save({name: 'Air Force', ranks: [
						{title: 'Aircraftman', available_from_level: '0', available_to_level: '1', created_date: new Date()},
						{title: 'Corporal', available_from_level: 2, available_to_level: 3, created_date: new Date()},
						{title: 'Sergeant', available_from_level: 4, available_to_level: 5, created_date: new Date()},
						{title: 'Warrant Officer', available_from_level: 6, available_to_level: 7, created_date: new Date()},
						{title: 'Officer Cadet', available_from_level: 8, available_to_level: 9, created_date: new Date()},
						{title: 'Pilot Officer', available_from_level: 10, available_to_level: 11, created_date: new Date()},
						{title: 'Flying Officer', available_from_level: 12, available_to_level: 13, created_date: new Date()},
						{title: 'Flight Lieutenant', available_from_level: 14, available_to_level: 15, created_date: new Date()},
						{title: 'Squadron Leader', available_from_level: 16, available_to_level: 17, created_date: new Date()},
						{title: 'Wing Commander', available_from_level: 18, available_to_level: 19, created_date: new Date()},
						{title: 'Group Captain', available_from_level: 20, available_to_level: 21, created_date: new Date()},
						{title: 'Air Commodore', available_from_level: 22, available_to_level: 23, created_date: new Date()},
						{title: 'Air Marshal', available_from_level: 24, available_to_level: 29, created_date: new Date()},
						{title: 'Marshal of the Air Force', available_from_level: 30, available_to_level: 30, created_date: new Date()}

					  ],created_date: new Date()});