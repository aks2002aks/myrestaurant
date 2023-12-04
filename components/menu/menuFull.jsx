import react, { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import RestaurantMenu from "./resturantMenu";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const MenuFull = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const fetchRestaurantMenu = async () => {
      const response = await fetch("/api/getRestaurantMenu");
      const data = await response.json();
      console.log(data);
      setMenu(data);
    };
    fetchRestaurantMenu();
  }, []);

  useEffect(() => {
    console.log(selectedFilters);
  }, [selectedFilters]);

  const filters = [
    {
      id: "menu",
      name: "Menu",
      options: menu
        ? menu?.categories.map((item, index) => ({
            value: item.name,
            label: item.name,
            checked: false,
          }))
        : [],
    },
    {
      id: "sessional_menu",
      name: "Sessional Menu",
      options: [
        {
          value: menu?.seasonal_menu.name,
          label: menu?.seasonal_menu.name,
          checked: false,
        },
      ],
    },
    {
      id: "price",
      name: "Price",
      options: [
        { value: "10", label: "10+", checked: false },
        { value: "20", label: "20+", checked: false },
        { value: "50", label: "50+", checked: false },
        { value: "80", label: "80+", checked: false },
        { value: "100", label: "100+", checked: false },
        { value: "500", label: "500+", checked: false },
      ],
    },
  ];

  const applyFilters = () => {
    const isMenuFilterApplied = Object.values(selectedFilters.menu || {}).some(
      (value) => value
    );

    const isSeasonalMenuFilterApplied = Object.values(
      selectedFilters["sessional_menu"] || {}
    ).some((value) => value);

    const isPriceFilterApplied = Object.values(
      selectedFilters.price || {}
    ).some((value) => value);

    // If no filters applied, show all menu and seasonal menu
    // If no filters applied, show all menu and seasonal menu
    if (!isMenuFilterApplied && !isSeasonalMenuFilterApplied) {
      const combinedMenu = [
        ...(menu?.categories.flatMap((category) => category.items) || []),
        ...(menu?.seasonal_menu?.items || []),
      ];

      // Ensure that combinedMenu is an array before returning
      const iterableCombinedMenu = Array.isArray(combinedMenu)
        ? combinedMenu
        : [combinedMenu];

      if (isPriceFilterApplied) {
        const selectedPriceOptions = Object.keys(
          selectedFilters.price || {}
        ).filter((priceOption) => selectedFilters.price[priceOption]);

        // If price filter is applied, filter items based on selected price options
        const filteredMenu =
          selectedPriceOptions.length > 0
            ? iterableCombinedMenu.filter((item) =>
                selectedPriceOptions.some(
                  (priceOption) => item.price >= parseInt(priceOption)
                )
              )
            : iterableCombinedMenu;

        console.log(filteredMenu);

        return filteredMenu;
      } else {
        console.log(iterableCombinedMenu);
        return iterableCombinedMenu;
      }
    }

    // Filter menu based on selected categories
    const filteredRegularMenu = isMenuFilterApplied
      ? menu?.categories.flatMap((category) => {
          if (selectedFilters.menu[category.name]) {
            return category.items;
          }
          return [];
        })
      : [];

    // Filter seasonal menu if the filter is applied
    const filteredSeasonalMenu = isSeasonalMenuFilterApplied
      ? menu?.seasonal_menu?.items || []
      : [];

    // Combine regular and seasonal menus
    const combinedMenu = [...filteredSeasonalMenu, ...filteredRegularMenu];

    // Extract selected price options
    const selectedPriceOptions = Object.keys(
      selectedFilters.price || {}
    ).filter((priceOption) => selectedFilters.price[priceOption]);

    // If price filter is applied, filter items based on selected price options
    const filteredMenu =
      selectedPriceOptions.length > 0
        ? combinedMenu.filter((item) =>
            selectedPriceOptions.some(
              (priceOption) => item.price >= parseInt(priceOption)
            )
          )
        : combinedMenu;

    console.log(filteredMenu);

    return filteredMenu;
  };

  const handleFilterChange = (sectionId, optionValue) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [sectionId]: {
        ...(prevFilters[sectionId] || {}),
        [optionValue]: !prevFilters[sectionId]?.[optionValue],
      },
    }));
  };

  return (
    <div className="bg-yellow-50">
      <div>
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-yellow-50 py-4 pb-12 shadow-xl pt-24">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-yellow-50 p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="hidden lg:block">
                    <h3 className="sr-only">Categories</h3>
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-b border-gray-200 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between  p-3 text-sm text-gray-400 hover:text-gray-500 rounded-2xl bg-yellow-900">
                                <span className="font-medium text-white">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-4">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      checked={
                                        selectedFilters[section.id]?.[
                                          option.value
                                        ]
                                      }
                                      onChange={() =>
                                        handleFilterChange(
                                          section.id,
                                          option.value
                                        )
                                      }
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-gray-600"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-1 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Menu
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-yellow-50 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none ">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between  p-3 text-sm text-gray-400 hover:text-gray-500 rounded-2xl bg-yellow-900">
                            <span className="font-medium text-white">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  checked={
                                    selectedFilters[section.id]?.[option.value]
                                  }
                                  onChange={() =>
                                    handleFilterChange(section.id, option.value)
                                  }
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <RestaurantMenu menu={applyFilters()} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
