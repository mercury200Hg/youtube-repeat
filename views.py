def index(request):
	data = []
	sub_names = []
	cluster_names = []
	cluster_first = []
	trees = getTree(1)
	#print trees
	if isinstance(trees,(list,dict,tuple)):
		for tree in trees:
			tree = json.loads(tree)

			for categories in tree:
					for sub_categories in categories['subCategories']:
						sub_names.append(sub_categories['name'])
						cluster_names.append({'name':sub_categories['name']})
						cluster_first.append(sub_categories['clusters'][0]['name'])
						for clusters in sub_categories['clusters']:
							clx = {}
							clx['name'] = clusters['name']
							if 'tags' in clusters:
								clx['tags'] = clusters['tags']
							cluster_names.append(clx)
					# sub_name = Paginator(sub_names,4).page(1)
					ctx = {
						"cat_name" : categories['name'],
						"cat_image" : categories['image'],
						"sub_list" : sub_names
					}
					print "HA\n\n"
					print ctx
					data.append(ctx)
					sub_names = []

	cluster_names = json.dumps(cluster_names)
	context = {}
	print request.user
	if request.user.is_authenticated():
		sidebar=sidebarContent(request)
		if sidebar['status']=='DIS':
			logout(request)
			return HttpResponseRedirect(reverse('public:home'))
		loggedIn = 1
		user = getoneprofile({'userid':request.user.id})[0]
		context = {
			'loggedIn':loggedIn,
			'user_name':user['name'].upper(),
			'data' : data,
			'sidebar':sidebar,
			'cluster_names' : cluster_names,
			'cluster_first' : cluster_first
		}
	else:
		loggedIn = 0
		context = {
			'loggedIn': loggedIn,
			'showLoginMessage': 0,
			'showSignUpMessage': 0,
			'data' : data,
			'cluster_names' : cluster_names,
			'cluster_first' : cluster_first
		}
	return render(request, 'public/landing.html', context)
