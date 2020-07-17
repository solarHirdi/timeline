export = Timeline;

declare class Timeline {

    /**
     * @constructor links.Timeline
     * The timeline is a visualization chart to visualize events in time.
     *
     * The timeline is developed in javascript as a Google Visualization Chart.
     *
     * @param {Element} container   The DOM element in which the Timeline will
     *                              be created. Normally a div element.
     * @param {Object} options      A name/value map containing settings for the
     *                              timeline. Optional.
     */
    constructor(container: Element, options?: object)

    /**
     * Add a new item.
     * @param {Object} itemData     Object containing item properties:<br>
     *                              {Date} start (required),
     *                              {Date} end (optional),
     *                              {String} content (required),
     *                              {String} group (optional)
     *                              {String} className (optional)
     *                              {Boolean} editable (optional)
     *                              {String} type (optional)
     * @param {boolean} [preventRender=false]   Do not re-render timeline if true
     */
    addItem(itemData: object, preventRender: boolean)

    /**
     * Add new type of items
     * @param {String} typeName  Name of new type
     * @param {Item} typeFactory Constructor of items
     */
    addItemType(typeName: string, typeFactory: links.Timeline.Item)

    /**
     * Cancel creation of a new item
     * This method can be called insed an event listener which catches the "new"
     * event. Creation of the new the event will be undone.
     */
    cancelAdd()

    /**
     * Cancel a change item
     * This method can be called insed an event listener which catches the "change"
     * event. The changed event position will be undone.
     */
    cancelChange()

    /**
     * Cancel deletion of an item
     * This method can be called insed an event listener which catches the "delete"
     * event. Deletion of the event will be undone.
     */
    cancelDelete()

    /**
     * Edit an item
     * @param {Number} index
     * @param {Object} itemData     Object containing item properties:<br>
     *                              {Date} start (required),
     *                              {Date} end (optional),
     *                              {String} content (required),
     *                              {String} group (optional)
     * @param {boolean} [preventRender=false]   Do not re-render timeline if true
     */
    changeItem(index: Number, itemData: object, preventRender?: boolean)

    /**
     * Redraw the timeline
     * Reloads the (linked) data table and redraws the timeline when resized.
     * See also the method checkResize
     */
    checkResize()

    /**
     * Delete all items
     */
    deleteAllItems()

    /**
     * Delete an item
     * @param {int} index   Index of the item to be deleted
     * @param {boolean} [preventRender=false]   Do not re-render timeline if true
     *                                          (optimization for multiple delete)
     */
    deleteItem(index: Number, preventRender?: boolean)

    /**
     * Main drawing logic. This is the function that needs to be called
     * in the html page, to draw the timeline.
     *
     * A data table with the events must be provided, and an options table.
     *
     * @param {google.visualization.DataTable}      data
     *                                 The data containing the events for the timeline.
     *                                 Object DataTable is defined in
     *                                 google.visualization.DataTable
     * @param {Object} options         A name/value map containing settings for the
     *                                 timeline. Optional. The use of options here
     *                                 is deprecated. Pass timeline options in the
     *                                 constructor or use setOptions()
     */
    draw(data: google.visualization.DataTable, options: object)

    /**
     * Retrieve the properties of a cluster.
     * @param {Number} index
     * @return {Object} clusterdata    Object containing cluster properties:<br>
     *                              {Date} start (required),
     *                              {String} type (optional)
     *                              {Array} array with item data as is in getItem()
     */
    getCluster(index: Number): object

    /**
     * Find the cluster index from a given HTML element
     * If no cluster index is found, undefined is returned
     * @param {Element} element
     * @return {Number | undefined} index
     */
    getClusterIndex(element: Element): Number | undefined

    /**
     * Retrieve the current custom time.
     * @return {Date} customTime
     */
    getCustomTime(): Date

    /**
     * Return the original data table.
     * @return {google.visualization.DataTable | Array} data
     */
    getData(): google.visualization.DataTable | Array

    /**
     * Retrieve the properties of an item.
     * @param {Number} index
     * @return {Object} itemData    Object containing item properties:<br>
     *                              {Date} start (required),
     *                              {Date} end (optional),
     *                              {String} content (required),
     *                              {String} group (optional),
     *                              {String} className (optional)
     *                              {boolean} editable (optional)
     *                              {String} type (optional)
     */
    getItem(index: Number): object

    /**
     * Retrieve the currently selected event
     * @return {Array} sel  An array with a column row, containing the row number
     *                      of the selected event. If there is no selection, an
     *                      empty array is returned.
     */
    getSelection(): Array

    /**
     * Retrieve the current visible range in the timeline.
     * @return {Object} An object with start and end properties
     */
    getVisibleChartRange(): object

    /**
     * Find all elements within the start and end range
     * If no element is found, returns an empty array
     * @param start time
     * @param end time
     * @return Array itemsInRange
     */
    getVisibleItems(start: Number, end: Number): Array

    /**
     * Redraw the timeline
     * Reloads the (linked) data table and redraws the timeline when resized.
     * See also the method checkResize
     */
    redraw()

    /**
     * Enable or disable autoscaling
     * @param {boolean} enable  If true, autoascaling is set true
     */
    setAutoScale(enable: boolean)

    /**
     * Set current time. This function can be used to set the time in the client
     * timeline equal with the time on a server.
     * @param {Date} time
     */
    setCurrentTime(time: Date)

    /**
     * Set custom time.
     * The custom time bar can be used to display events in past or future.
     * @param {Date} time
     */
    setCustomTime(time: Date)

    /**
     * Set data for the timeline
     * @param {google.visualization.DataTable | Array} data
     */
    setData(data: google.visualization.DataTable | Array)

    /**
     * Select an event. The visible chart range will be moved such that the selected
     * event is placed in the middle.
     * For example selection = [{row: 5}];
     * @param {Array} selection   An array with a column row, containing the row
     *                           number (the id) of the event to be selected.
     * @return {boolean}         true if selection is succesfully set, else false.
     */
    setSelection(selection: Array): boolean

    /**
     * Set a new size for the timeline
     * @param {string} width   Width in pixels or percentage (for example "800px"
     *                         or "50%")
     * @param {string} height  Height in pixels or percentage  (for example "400px"
     *                         or "30%")
     */
    setSize(width: string, height: string)

    /**
     * Set a custom scale. Autoscaling will be disabled.
     * For example setScale(SCALE.MINUTES, 5) will result
     * in minor steps of 5 minutes, and major steps of an hour.
     *
     * @param {links.Timeline.StepDate.SCALE} scale
     *                               A scale. Choose from SCALE.MILLISECOND,
     *                               SCALE.SECOND, SCALE.MINUTE, SCALE.HOUR,
     *                               SCALE.WEEKDAY, SCALE.DAY, SCALE.MONTH,
     *                               SCALE.YEAR.
     * @param {int}        step   A step size, by default 1. Choose for
     *                               example 1, 2, 5, or 10.
     */
    setScale(scale: links.Timeline.StepDate.SCALE, step: Number)

    /**
     * Set a new value for the visible range int the timeline.
     * Set start undefined to include everything from the earliest date to end.
     * Set end undefined to include everything from start to the last date.
     * Example usage:
     *    myTimeline.setVisibleChartRange(new Date("2010-08-22"),
     *                                    new Date("2010-09-13"));
     * @param {Date}   start     The start date for the timeline. optional
     * @param {Date}   end       The end date for the timeline. optional
     * @param {boolean} redraw   Optional. If true (default) the Timeline is
     *                           directly redrawn
     */
    setVisibleChartRange(start: Date, end: Date, redraw?: boolean)

    /**
     * Adjust the visible range such that the current time is located in the center
     * of the timeline
     */
    setVisibleChartRangeNow()

    /**
     * Change the visible chart range such that all items become visible
     */
    setVisibleChartRangeAuto()

    /**
     * Move the timeline the given movefactor to the left or right. Start and end
     * date will be adjusted, and the timeline will be redrawn.
     * For example, try moveFactor = 0.1 or -0.1
     * @param {Number}  moveFactor      Moving amount. Positive value will move right,
     *                                 negative value will move left
     */
    move(moveFactor: Number)

    /**
     * Zoom the timeline the given zoomfactor in or out. Start and end date will
     * be adjusted, and the timeline will be redrawn. You can optionally give a
     * date around which to zoom.
     * For example, try zoomfactor = 0.1 or -0.1
     * @param {Number} zoomFactor      Zooming amount. Positive value will zoom in,
     *                                 negative value will zoom out
     * @param {Date}   zoomAroundDate  Date around which will be zoomed. Optional
     */
    zoom(zoomFactor: Number, zoomAroundDate: Date)
}
